import numpy as np
import json
from sklearn.metrics.pairwise import cosine_similarity
from db import get_db_connection

def create_profile_vector(profile, attributes):
  """
  A vector representation of the profile for cosine similarity.
  """
  vector = []
  for attribute, options in attributes.items():
    if attribute in ['care_type', 'symptoms']:
      # Multi-hot encoding for multi-select attributes
      sub_vector = [1 if option in profile.get(attribute, []) else 0 for option in options]
      vector.extend(sub_vector)
    elif attribute == 'dementia_stage':
      # Map dementia stage to experience level
      stage_to_experience = {'Mild': 1, 'Moderate': 3, 'Severe': 5}
      vector.append(stage_to_experience.get(profile.get(attribute, 'Mild'), 2))
  return np.array(vector)

def calculate_hybrid_similarity(caregiver, care_recipient, weights, attributes):
  """
  Computing a hybrid similarity score using exact match for prioritized attributes
  and cosine similarity for lower-priority attributes.
  """
  exact_match_score = 0.0
  max_exact_match_score = sum(weights.values())

  # Exact matching for prioritized attributes
  for key in ['preferred_gender', 'availability', 'language', 'dementia_type']:
    if key == 'preferred_gender':
      if care_recipient.get(key) == 'No Preference' or caregiver.get(key) == care_recipient.get(key):
        exact_match_score += weights[key]
    elif key == 'language':
      if 'No Preference' in care_recipient.get(key, []) or set(caregiver.get(key, [])) & set(care_recipient.get(key, [])):
        exact_match_score += weights[key]
    elif key in ['dementia_type']:
      caregiver_set = set(caregiver.get(key, []))
      recipient_set = set(care_recipient.get(key, []))
      if caregiver_set & recipient_set:  # If there is any match
        exact_match_score += weights[key]
    elif caregiver.get(key) == care_recipient.get(key):  # Single-value exact match
      exact_match_score += weights[key]

  # Cosine similarity for care_type and symptoms
  caregiver_vector = create_profile_vector(caregiver, attributes)
  recipient_vector = create_profile_vector(care_recipient, attributes)
  if np.any(caregiver_vector) and np.any(recipient_vector):  # Non-empty vectors
    cosine_sim = cosine_similarity([caregiver_vector], [recipient_vector])[0][0]
  else: # Else
    cosine_sim = 0.0

  # Combined scores (normalized to 100%)
  hybrid_score = (exact_match_score / max_exact_match_score) * 0.7 + (cosine_sim * 0.3)

  return hybrid_score * 100


def match_caregivers(care_recipient_data):
  """
  Match caregivers using a hybrid similarity scoring approach.
  """
  care_recipient_data = transform_json(care_recipient_data)
  # print("care_recipient_data", json.dumps(care_recipient_data))

  # Connect to the database and fetch caregiver profiles
  conn = get_db_connection()
  cursor = conn.cursor()
  cursor.execute("SELECT * FROM caregivers")
  caregivers = cursor.fetchall()

  # Columns in the table
  columns = ['id', 'gender', 'language', 'preferred_gender', 'dementia_type', 'symptoms', 
              'experience', 'care_type', 'availability']

  # Convert caregivers to a list of dictionaries
  caregivers = [dict(zip(columns, record)) for record in caregivers]

  # Weights for exact match attributes
  weights = {
    'preferred_gender': 40,  # Highest priority
    'availability': 30,      # Second highest
    'language': 20,          # Third highest
    'dementia_type': 10      # Fourth
  }
  # total_weight = sum(raw_weights.values())
  # weights = {key: value / total_weight for key, value in raw_weights.items()}  # Normalize weights

  # Attributes for vectorization
  attributes = {
    'care_type': [
      'Medication Management', 'Mobility Assistance', 'Daily Living Support',
      'Cognitive Stimulation Activities', 'Specialised Therapies',
      'Meal Preparation and Feeding Assistance', 'In-home Medical Care'
    ],
    'dementia_stage': ['Mild', 'Moderate', 'Severe'],
    'symptoms': [
      'Mental decline', 'Difficulty thinking or understanding', 'Forgetfulness',
      'Impulsive behaviour', 'Disorientation', 'Lack of consideration for others',
      'Disorganised or illogical thinking', 'Compulsive behaviour', 'Agitation',
      'Difficulty regulating emotions', 'Wandering or getting lost',
      'Loss of interest in activities or people', 'Delusions or paranoia', 'Apathy',
      'Neglect of personal hygiene', 'Excessive sleep or insomnia',
      'Changes in food preferences', 'Sedentary or inactivity',
      'Muscle stiffness or rigidity', 'Restless leg syndrome',
      'Shuffling walk or slow movement', 'Difficulty combining muscle movements',
      'Tremors at rest', 'Balance issues and falls', 'Speaking slowly',
      'Gradual loss of vocabulary', 'Difficulty making correct sounds',
      'Mixing up word order or using incorrect words', 'Visual hallucinations',
      'Urinary incontinence', 'Sensitivity to heat or cold', 'Smaller handwriting',
      'Dizziness or fainting', 'Anxiety, depression or apathy'
    ]
  }

  # Compute similarity for each caregiver
  matches = []
  for caregiver in caregivers:
    similarity_score = calculate_hybrid_similarity(caregiver, care_recipient_data, weights, attributes)
    if similarity_score > 50:  # Filter out profiles with a score of 50
      matches.append((caregiver, similarity_score))

  # Sort caregivers by similarity score in descending order
  matches.sort(key=lambda x: x[1], reverse=True)

  # Format the output to include only caregiver information and similarity score
  result = [{
    'caregiver_id': match[0]['id'],
    'similarity_score': round(match[1], 2),  # Round to two decimal places
    'caregiver_details': match[0]
  } for match in matches]

  # Close database connection
  cursor.close()
  conn.close()

  # print()
  # print("result", json.dumps(result))
  return result

def transform_json(input_json):
  """
  Transforms the incoming JSON to match the required output format.
  """
  # Consolidate all symptoms into a single list
  all_symptoms = (
    input_json.get("behaviouralSymptoms", []) +
    input_json.get("emotionalSymptoms", []) +
    input_json.get("lifestyleChanges", []) +
    input_json.get("movementSymptoms", []) +
    input_json.get("languageSymptoms", []) +
    input_json.get("otherSymptoms", [])
  )

  # Map the input JSON keys to the required output format
  transformed_json = {
    "gender": input_json.get("gender"),
    "language": input_json.get("languagePreference", []),
    "preferred_gender": input_json.get("genderPreference"),
    "dementia_type": input_json.get("dementiaType", []),
    "symptoms": all_symptoms,
    "dementia_stage": input_json.get("dementiaStage"),
    "care_type": input_json.get("careType", []),
    "availability": input_json.get("availability")
  }

  return transformed_json
