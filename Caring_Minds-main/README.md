# Caring_Minds

Application hosted on https://render.com is available till 25th December 2024. \
View Application Here: https://caring-minds.onrender.com/ 
***********************************************************
To setup and run frontend of the application:
1. Ensure the following is installed in the system:
	- [Node.js](https://nodejs.org/)	
	- [npm](https://www.npmjs.com/) 
2. Clone the repository:
	 git clone https://git.txstate.edu/kgv34/Caring_Minds.git
3. Navigate to the cloned folder 'Caring_Minds' and right-click to  'open in terminal' or 'open in git bash'
4. then in the terminal, add the command:
	- cd frontend\care-recipient-form
5. install dependency by adding the command;
   	- rm -rf node_modules
	- rm -rf package-lock.json
 	- npm install react-scripts 
	- npm install
7. then add command to open the link:
	- npm start

***********************************************************

A temporary PostgreSQL database was hosted on https://render.com/ \
Database is used for saving the profiles of the care givers.

***********************************************************

To setup and run backend of the application: \
Install the packages \
`pip install -r requirements.txt`

Run `app.py` to initiate API router on port `5000`.

API Method: `POST` \
API Hit: `http://127.0.0.1:5000/match_caregivers` \
Sample API Input:
```
{
  "availability": "Full Time",
  "behaviouralSymptoms": ["Mental decline"],
  "careType": ["Medication Management", "Daily Living Support"],
  "dementiaStage": "Moderate",
  "dementiaType": ["Alzheimer's Disease", "Vascular Dementia"],
  "emotionalSymptoms": ["Agitation"],
  "gender": "Do not wish to disclose",
  "genderPreference": "Female",
  "languagePreference": ["English"],
  "languageSymptoms": [],
  "lifestyleChanges": [],
  "movementSymptoms": ["Muscle stiffness or rigidity"],
  "otherSymptoms": []
}
```

Sample Output:
```
[
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Medication Management",
                "In-home Medical Care"
            ],
            "dementia_type": [
                "Alzheimer's Disease",
                "Vascular Dementia"
            ],
            "experience": 5,
            "gender": "Female",
            "id": 47,
            "language": [
                "English"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Mental decline",
                "Forgetfulness",
                "Neglect of personal hygiene"
            ]
        },
        "caregiver_id": 47,
        "similarity_score": 86.37
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "In-home Medical Care"
            ],
            "dementia_type": [
                "Vascular Dementia"
            ],
            "experience": 4,
            "gender": "Female",
            "id": 76,
            "language": [
                "English"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Disorientation",
                "Agitation"
            ]
        },
        "caregiver_id": 76,
        "similarity_score": 86.04
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Medication Management",
                "Cognitive Stimulation Activities",
                "In-home Medical Care"
            ],
            "dementia_type": [
                "Alzheimer's Disease",
                "Vascular Dementia"
            ],
            "experience": 5,
            "gender": "Female",
            "id": 21,
            "language": [
                "English",
                "Spanish"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Mental decline",
                "Forgetfulness",
                "Disorientation",
                "Agitation",
                "Difficulty regulating emotions",
                "Neglect of personal hygiene",
                "Muscle stiffness or rigidity",
                "Speaking slowly",
                "Visual hallucinations"
            ]
        },
        "caregiver_id": 21,
        "similarity_score": 85.57
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Medication Management",
                "Cognitive Stimulation Activities",
                "In-home Medical Care"
            ],
            "dementia_type": [
                "Alzheimer's Disease",
                "Vascular Dementia"
            ],
            "experience": 5,
            "gender": "Female",
            "id": 41,
            "language": [
                "English",
                "Spanish"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Mental decline",
                "Forgetfulness",
                "Disorientation",
                "Agitation",
                "Difficulty regulating emotions",
                "Neglect of personal hygiene",
                "Muscle stiffness or rigidity",
                "Speaking slowly",
                "Visual hallucinations"
            ]
        },
        "caregiver_id": 41,
        "similarity_score": 85.57
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "In-home Medical Care",
                "Daily Living Support"
            ],
            "dementia_type": [
                "Alzheimer's Disease",
                "Vascular Dementia"
            ],
            "experience": 3,
            "gender": "Female",
            "id": 52,
            "language": [
                "English"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Disorientation",
                "Loss of interest in activities or people"
            ]
        },
        "caregiver_id": 52,
        "similarity_score": 84.34
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "In-home Medical Care"
            ],
            "dementia_type": [
                "Alzheimer's Disease",
                "Vascular Dementia"
            ],
            "experience": 5,
            "gender": "Female",
            "id": 61,
            "language": [
                "English",
                "French"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Mental decline",
                "Forgetfulness",
                "Visual hallucinations"
            ]
        },
        "caregiver_id": 61,
        "similarity_score": 84.34
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Medication Management",
                "Mobility Assistance"
            ],
            "dementia_type": [
                "Vascular Dementia"
            ],
            "experience": 4,
            "gender": "Female",
            "id": 28,
            "language": [
                "English",
                "Spanish"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Mental decline",
                "Impulsive behaviour",
                "Wandering or getting lost",
                "Difficulty combining muscle movements",
                "Gradual loss of vocabulary",
                "Dizziness or fainting"
            ]
        },
        "caregiver_id": 28,
        "similarity_score": 83.36
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Cognitive Stimulation Activities",
                "Specialised Therapies"
            ],
            "dementia_type": [
                "Alzheimer's Disease"
            ],
            "experience": 5,
            "gender": "Female",
            "id": 26,
            "language": [
                "English",
                "Spanish"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Mental decline",
                "Compulsive behaviour",
                "Loss of interest in activities or people",
                "Shuffling walk or slow movement",
                "Anxiety, depression or apathy"
            ]
        },
        "caregiver_id": 26,
        "similarity_score": 81.34
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Specialised Therapies"
            ],
            "dementia_type": [
                "Frontotemporal Dementia"
            ],
            "experience": 3,
            "gender": "Female",
            "id": 11,
            "language": [
                "English"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Compulsive behaviour",
                "Difficulty regulating emotions"
            ]
        },
        "caregiver_id": 11,
        "similarity_score": 75.03
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Daily Living Support"
            ],
            "dementia_type": [
                "Alzheimer's Disease"
            ],
            "experience": 3,
            "gender": "Male",
            "id": 8,
            "language": [
                "Spanish"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Impulsive behaviour",
                "Forgetfulness"
            ]
        },
        "caregiver_id": 8,
        "similarity_score": 72.04
    },
    {
        "caregiver_details": {
            "availability": "Full Time",
            "care_type": [
                "Cognitive Stimulation Activities"
            ],
            "dementia_type": [
                "Vascular Dementia"
            ],
            "experience": 5,
            "gender": "Female",
            "id": 66,
            "language": [
                "Spanish"
            ],
            "preferred_gender": "Female",
            "symptoms": [
                "Disorientation",
                "Agitation"
            ]
        },
        "caregiver_id": 66,
        "similarity_score": 72.04
    }
]
```
************************************************************

## Sample Frontend Questionnaire UI
![image](https://git.txstate.edu/kgv34/Caring_Minds/assets/4388/464723c5-af15-4dad-8c58-b0fa16ef5ecb)

## Sample Frontend Results UI
![image](https://git.txstate.edu/kgv34/Caring_Minds/assets/4388/c5772d66-7b41-40fb-9538-6c04929f8934)

## Sample Frontend No Results UI - if Form submitted empty/No matches found
![image](https://git.txstate.edu/kgv34/Caring_Minds/assets/4388/714b5fbd-eb9d-4e2f-abdc-009ec5b76ee8)

************************************************************

