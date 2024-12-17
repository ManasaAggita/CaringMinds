DROP TABLE caregivers;

CREATE TABLE caregivers (
    id SERIAL PRIMARY KEY,
    gender VARCHAR(20),
    language TEXT[], -- Array to store multiple languages
    preferred_gender VARCHAR(20),
    dementia_type TEXT[], -- Array to store multiple dementia types
    symptoms TEXT[], -- Array to store multiple symptoms
    experience INTEGER, -- Matches dementia_stage (Mild=2, Moderate=3, Severe=5)
    care_type TEXT[], -- Array to store multiple care types
    availability VARCHAR(20) -- Full Time, Part Time, 24/7
);


SELECT * FROM caregivers;


INSERT INTO caregivers (gender, language, preferred_gender, dementia_type, symptoms, experience, care_type, availability)
VALUES
('Female', ARRAY['English', 'Spanish'], 'Male', ARRAY['Alzheimer''s Disease', 'Vascular Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness'], 3, ARRAY['Medication Management', 'Mobility Assistance'], 'Full Time'),
('Male', ARRAY['English'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Muscle stiffness or rigidity', 'Shuffling walk or slow movement'], 5, ARRAY['Daily Living Support', 'In-home Medical Care'], 'Part Time'),
('Male', ARRAY['English', 'French'], 'Male', ARRAY['Lewy Body Dementia', 'Vascular Dementia'], 
 ARRAY['Wandering or getting lost', 'Forgetfulness', 'Speaking slowly'], 5, ARRAY['Specialised Therapies', 'In-home Medical Care'], 'Part Time'),
('Female', ARRAY['Spanish', 'French'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Disorientation', 'Apathy'], 3, ARRAY['Cognitive Stimulation Activities', 'Daily Living Support'], 'Full Time'),
('Male', ARRAY['English'], 'Female', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Gradual loss of vocabulary'], 2, ARRAY['Mobility Assistance'], '24/7'),
('Female', ARRAY['French'], 'Male', ARRAY['Vascular Dementia'], 
 ARRAY['Agitation', 'Difficulty regulating emotions'], 5, ARRAY['Specialised Therapies', 'Meal Preparation and Feeding Assistance'], 'Full Time'),
('Non-binary', ARRAY['English', 'Spanish'], 'Female', ARRAY['Lewy Body Dementia'], 
 ARRAY['Tremors at rest', 'Balance issues and falls'], 4, ARRAY['In-home Medical Care', 'Cognitive Stimulation Activities'], 'Part Time'),
('Male', ARRAY['Spanish'], 'Female', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Impulsive behaviour', 'Forgetfulness'], 3, ARRAY['Daily Living Support'], 'Full Time'),
('Female', ARRAY['English'], 'Male', ARRAY['Vascular Dementia'], 
 ARRAY['Wandering or getting lost', 'Disorientation'], 4, ARRAY['Mobility Assistance', 'Daily Living Support'], 'Part Time'),
('Male', ARRAY['English', 'Spanish'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Muscle stiffness or rigidity', 'Difficulty combining muscle movements'], 5, ARRAY['In-home Medical Care', 'Mobility Assistance'], 'Full Time'),
('Female', ARRAY['English'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Compulsive behaviour', 'Difficulty regulating emotions'], 3, ARRAY['Specialised Therapies'], 'Full Time'),
('Non-binary', ARRAY['French'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Forgetfulness', 'Visual hallucinations'], 2, ARRAY['Medication Management', 'Daily Living Support'], 'Part Time'),
('Male', ARRAY['Spanish'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Mental decline', 'Dizziness or fainting'], 4, ARRAY['Mobility Assistance', 'In-home Medical Care'], '24/7'),
('Female', ARRAY['English', 'Spanish'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Gradual loss of vocabulary', 'Muscle stiffness or rigidity'], 5, ARRAY['Daily Living Support'], 'Full Time'),
('Male', ARRAY['English'], 'Male', ARRAY['Alzheimer''s Disease', 'Vascular Dementia'], 
 ARRAY['Apathy', 'Difficulty making correct sounds'], 3, ARRAY['Cognitive Stimulation Activities'], 'Full Time'),
('Non-binary', ARRAY['French'], 'Female', ARRAY['Lewy Body Dementia'], 
 ARRAY['Mixing up word order or using incorrect words', 'Compulsive behaviour'], 4, ARRAY['Specialised Therapies'], 'Part Time'),
('Female', ARRAY['English', 'Spanish'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Forgetfulness', 'Loss of interest in activities or people'], 5, ARRAY['Mobility Assistance', 'Daily Living Support'], '24/7'),
('Male', ARRAY['Spanish'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Mental decline', 'Shuffling walk or slow movement'], 2, ARRAY['Daily Living Support'], 'Part Time'),
('Female', ARRAY['English'], 'Male', ARRAY['Vascular Dementia'], 
 ARRAY['Disorientation', 'Difficulty regulating emotions'], 3, ARRAY['In-home Medical Care'], 'Full Time'),
('Male', ARRAY['English', 'Spanish'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Wandering or getting lost', 'Compulsive behaviour'], 4, ARRAY['Specialised Therapies', 'Cognitive Stimulation Activities'], '24/7')



INSERT INTO caregivers (gender, language, preferred_gender, dementia_type, symptoms, experience, care_type, availability)
VALUES 
('Female', ARRAY['English', 'Spanish'], 'Female', ARRAY['Alzheimer''s Disease', 'Vascular Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Disorientation', 'Agitation', 'Difficulty regulating emotions', 'Neglect of personal hygiene', 'Muscle stiffness or rigidity', 'Speaking slowly', 'Visual hallucinations'], 
 5, ARRAY['Medication Management', 'Cognitive Stimulation Activities', 'In-home Medical Care'], 'Full Time'),
('Male', ARRAY['English'], 'Female', ARRAY['Lewy Body Dementia', 'Frontotemporal Dementia'], 
 ARRAY['Disorganised or illogical thinking', 'Compulsive behaviour', 'Apathy', 'Changes in food preferences', 'Shuffling walk or slow movement', 'Tremors at rest', 'Gradual loss of vocabulary'], 
 4, ARRAY['Daily Living Support', 'Mobility Assistance'], 'Part Time'),
('Non-binary', ARRAY['English', 'French'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Impulsive behaviour', 'Delusions or paranoia', 'Excessive sleep or insomnia', 'Balance issues and falls', 'Difficulty making correct sounds', 'Urinary incontinence'], 
 3, ARRAY['Specialised Therapies', 'Cognitive Stimulation Activities'], '24/7'),
('Female', ARRAY['Spanish'], 'Male', ARRAY['Alzheimer''s Disease', 'Lewy Body Dementia'], 
 ARRAY['Mental decline', 'Difficulty thinking or understanding', 'Wandering or getting lost', 'Disorientation', 'Neglect of personal hygiene', 'Muscle stiffness or rigidity', 'Speaking slowly', 'Sensitivity to heat or cold'], 
 5, ARRAY['Meal Preparation and Feeding Assistance', 'In-home Medical Care'], 'Full Time'),
('Male', ARRAY['English'], 'Female', ARRAY['Vascular Dementia', 'Frontotemporal Dementia'], 
 ARRAY['Forgetfulness', 'Disorganised or illogical thinking', 'Difficulty regulating emotions', 'Sedentary or inactivity', 'Tremors at rest', 'Mixing up word order or using incorrect words'], 
 4, ARRAY['Daily Living Support', 'Mobility Assistance'], 'Part Time'),
('Female', ARRAY['English', 'Spanish'], 'Female', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Compulsive behaviour', 'Loss of interest in activities or people', 'Shuffling walk or slow movement', 'Anxiety, depression or apathy'], 
 5, ARRAY['Cognitive Stimulation Activities', 'Specialised Therapies'], 'Full Time'),
('Male', ARRAY['French'], 'Female', ARRAY['Lewy Body Dementia'], 
 ARRAY['Forgetfulness', 'Agitation', 'Difficulty regulating emotions', 'Muscle stiffness or rigidity', 'Speaking slowly', 'Sensitivity to heat or cold', 'Similar handwriting'], 
 3, ARRAY['Daily Living Support', 'Mobility Assistance'], '24/7'),
('Female', ARRAY['English', 'Spanish'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Mental decline', 'Impulsive behaviour', 'Wandering or getting lost', 'Difficulty combining muscle movements', 'Gradual loss of vocabulary', 'Dizziness or fainting'], 
 4, ARRAY['Medication Management', 'Mobility Assistance'], 'Full Time'),
('Male', ARRAY['Spanish'], 'Male', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Forgetfulness', 'Disorientation', 'Delusions or paranoia', 'Balance issues and falls', 'Difficulty making correct sounds'], 
 5, ARRAY['In-home Medical Care', 'Daily Living Support'], 'Part Time'),
('Non-binary', ARRAY['English'], 'Male', ARRAY['Alzheimer''s Disease', 'Lewy Body Dementia'], 
 ARRAY['Compulsive behaviour', 'Loss of interest in activities or people', 'Neglect of personal hygiene', 'Tremors at rest', 'Visual hallucinations'], 
 4, ARRAY['Specialised Therapies', 'Cognitive Stimulation Activities'], 'Full Time'),
('Female', ARRAY['English', 'French'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Wandering or getting lost', 'Changes in food preferences', 'Shuffling walk or slow movement', 'Difficulty combining muscle movements'], 
 5, ARRAY['Medication Management', 'In-home Medical Care'], 'Part Time'),
('Male', ARRAY['Spanish', 'English'], 'Male', ARRAY['Lewy Body Dementia', 'Alzheimer''s Disease'], 
 ARRAY['Disorganised or illogical thinking', 'Apathy', 'Excessive sleep or insomnia', 'Difficulty combining muscle movements', 'Mixing up word order or using incorrect words'], 
 4, ARRAY['Daily Living Support', 'Specialised Therapies'], 'Full Time'),
('Non-binary', ARRAY['French'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Impulsive behaviour', 'Compulsive behaviour', 'Loss of interest in activities or people', 'Shuffling walk or slow movement', 'Speaking slowly'], 
 3, ARRAY['Mobility Assistance', 'Cognitive Stimulation Activities'], '24/7'),
('Female', ARRAY['English', 'Spanish'], 'Male', ARRAY['Vascular Dementia'], 
 ARRAY['Mental decline', 'Disorientation', 'Agitation', 'Muscle stiffness or rigidity', 'Dizziness or fainting'], 
 5, ARRAY['In-home Medical Care', 'Daily Living Support'], 'Full Time'),
('Male', ARRAY['English'], 'Male', ARRAY['Alzheimer''s Disease', 'Lewy Body Dementia'], 
 ARRAY['Forgetfulness', 'Delusions or paranoia', 'Changes in food preferences', 'Balance issues and falls'], 
 4, ARRAY['Cognitive Stimulation Activities', 'Mobility Assistance'], 'Part Time'),
('Female', ARRAY['Spanish'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Disorganised or illogical thinking', 'Difficulty regulating emotions', 'Neglect of personal hygiene', 'Tremors at rest'], 
 3, ARRAY['Specialised Therapies', 'Meal Preparation and Feeding Assistance'], 'Full Time'),
('Non-binary', ARRAY['English', 'French'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Loss of interest in activities or people', 'Gradual loss of vocabulary'], 
 4, ARRAY['Daily Living Support', 'In-home Medical Care'], 'Part Time'),
('Male', ARRAY['English'], 'Female', ARRAY['Lewy Body Dementia'], 
 ARRAY['Disorientation', 'Apathy', 'Wandering or getting lost', 'Difficulty combining muscle movements'], 
 5, ARRAY['Mobility Assistance', 'Specialised Therapies'], '24/7'),
('Female', ARRAY['English', 'Spanish'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Compulsive behaviour', 'Changes in food preferences', 'Shuffling walk or slow movement', 'Mixing up word order or using incorrect words'], 
 4, ARRAY['Daily Living Support', 'Cognitive Stimulation Activities'], 'Full Time'),
('Male', ARRAY['English'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Mental decline', 'Disorganised or illogical thinking', 'Loss of interest in activities or people', 'Difficulty making correct sounds'], 
 3, ARRAY['In-home Medical Care', 'Specialised Therapies'], 'Part Time');


INSERT INTO caregivers (gender, language, preferred_gender, dementia_type, symptoms, experience, care_type, availability)
VALUES 
-- High Priority Matches
('Female', ARRAY['English', 'Spanish'], 'Female', ARRAY['Alzheimer''s Disease', 'Vascular Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Disorientation', 'Agitation', 'Difficulty regulating emotions', 'Neglect of personal hygiene', 'Muscle stiffness or rigidity', 'Speaking slowly', 'Visual hallucinations'], 
 5, ARRAY['Medication Management', 'Cognitive Stimulation Activities', 'In-home Medical Care'], 'Full Time'),
('Male', ARRAY['English'], 'Female', ARRAY['Lewy Body Dementia', 'Vascular Dementia'], 
 ARRAY['Impulsive behaviour', 'Disorganised or illogical thinking', 'Wandering or getting lost', 'Difficulty combining muscle movements', 'Tremors at rest'], 
 4, ARRAY['Daily Living Support', 'Specialised Therapies'], 'Part Time'),
('Female', ARRAY['English', 'Spanish', 'French'], 'Female', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Agitation'], 
 3, ARRAY['Mobility Assistance', 'Cognitive Stimulation Activities'], '24/7'),
('Non-binary', ARRAY['French'], 'Male', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Compulsive behaviour', 'Apathy', 'Gradual loss of vocabulary', 'Mixing up word order or using incorrect words'], 
 5, ARRAY['Meal Preparation and Feeding Assistance'], 'Full Time'),

-- Moderate Priority Matches
('Female', ARRAY['Spanish'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Disorientation', 'Difficulty regulating emotions', 'Shuffling walk or slow movement'], 
 4, ARRAY['In-home Medical Care', 'Daily Living Support'], 'Full Time'),
('Male', ARRAY['English'], 'Non-binary', ARRAY['Alzheimer''s Disease', 'Lewy Body Dementia'], 
 ARRAY['Anxiety, depression or apathy', 'Visual hallucinations'], 
 3, ARRAY['Mobility Assistance'], 'Part Time'),
('Female', ARRAY['English'], 'Female', ARRAY['Alzheimer''s Disease', 'Vascular Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Neglect of personal hygiene'], 
 5, ARRAY['Medication Management', 'In-home Medical Care'], 'Full Time'),
('Non-binary', ARRAY['English', 'French'], 'Non-binary', ARRAY['Lewy Body Dementia'], 
 ARRAY['Difficulty making correct sounds', 'Dizziness or fainting', 'Sensitivity to heat or cold'], 
 4, ARRAY['Specialised Therapies', 'Cognitive Stimulation Activities'], 'Part Time'),

-- Low Priority Matches
('Female', ARRAY['English'], 'Male', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Compulsive behaviour', 'Apathy', 'Changes in food preferences'], 
 2, ARRAY['Mobility Assistance'], '24/7'),
('Male', ARRAY['French'], 'Female', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Speaking slowly', 'Gradual loss of vocabulary'], 
 3, ARRAY['Daily Living Support', 'Specialised Therapies'], 'Part Time'),

-- High Priority Matches
('Female', ARRAY['Spanish'], 'Non-binary', ARRAY['Vascular Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Difficulty combining muscle movements'], 
 5, ARRAY['Medication Management'], 'Full Time'),
('Female', ARRAY['English'], 'Female', ARRAY['Alzheimer''s Disease', 'Vascular Dementia'], 
 ARRAY['Disorientation', 'Loss of interest in activities or people'], 
 3, ARRAY['In-home Medical Care', 'Daily Living Support'], 'Full Time'),
('Male', ARRAY['English'], 'Non-binary', ARRAY['Lewy Body Dementia'], 
 ARRAY['Muscle stiffness or rigidity', 'Restless leg syndrome', 'Difficulty regulating emotions'], 
 4, ARRAY['Cognitive Stimulation Activities'], '24/7'),
('Female', ARRAY['English', 'French'], 'Male', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Compulsive behaviour', 'Disorganised or illogical thinking'], 
 5, ARRAY['Mobility Assistance'], 'Part Time'),

-- Moderate Priority Matches
('Non-binary', ARRAY['Spanish'], 'Non-binary', ARRAY['Vascular Dementia'], 
 ARRAY['Forgetfulness', 'Neglect of personal hygiene'], 
 4, ARRAY['Specialised Therapies'], 'Full Time'),
('Female', ARRAY['English', 'Spanish'], 'Non-binary', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Impulsive behaviour'], 
 5, ARRAY['In-home Medical Care', 'Daily Living Support'], '24/7'),
('Male', ARRAY['English'], 'Female', ARRAY['Lewy Body Dementia'], 
 ARRAY['Dizziness or fainting', 'Visual hallucinations', 'Anxiety, depression or apathy'], 
 3, ARRAY['Specialised Therapies'], 'Part Time'),
('Female', ARRAY['French'], 'Male', ARRAY['Vascular Dementia'], 
 ARRAY['Difficulty thinking or understanding', 'Apathy'], 
 4, ARRAY['Cognitive Stimulation Activities', 'Mobility Assistance'], 'Full Time'),

-- Low Priority Matches
('Male', ARRAY['Spanish'], 'Male', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Disorientation', 'Loss of interest in activities or people'], 
 3, ARRAY['Meal Preparation and Feeding Assistance'], 'Part Time'),
('Non-binary', ARRAY['English'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Gradual loss of vocabulary', 'Shuffling walk or slow movement'], 
 4, ARRAY['Daily Living Support'], '24/7'),
('Female', ARRAY['English', 'French'], 'Female', ARRAY['Alzheimer''s Disease', 'Vascular Dementia'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Visual hallucinations'], 
 5, ARRAY['In-home Medical Care'], 'Full Time'),
('Male', ARRAY['English'], 'Male', ARRAY['Vascular Dementia'], 
 ARRAY['Compulsive behaviour', 'Changes in food preferences'], 
 3, ARRAY['Specialised Therapies', 'Mobility Assistance'], 'Part Time'),
('Female', ARRAY['English'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Disorientation', 'Difficulty regulating emotions'], 
 4, ARRAY['Cognitive Stimulation Activities'], '24/7'),
('Female', ARRAY['Spanish'], 'Male', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Disorganised or illogical thinking', 'Gradual loss of vocabulary'], 
 5, ARRAY['Daily Living Support'], 'Full Time'),

-- High Priority Matches
('Non-binary', ARRAY['English'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Forgetfulness', 'Speaking slowly'], 
 4, ARRAY['Medication Management', 'In-home Medical Care'], 'Full Time'),
('Female', ARRAY['Spanish'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Disorientation', 'Agitation'], 
 5, ARRAY['Cognitive Stimulation Activities'], 'Full Time'),
('Male', ARRAY['English', 'French'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Dizziness or fainting', 'Neglect of personal hygiene'], 
 4, ARRAY['Specialised Therapies'], 'Part Time'),
('Female', ARRAY['English'], 'Male', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Disorganised or illogical thinking', 'Compulsive behaviour'], 
 3, ARRAY['Meal Preparation and Feeding Assistance'], '24/7');






INSERT INTO caregivers (gender, language, preferred_gender, dementia_type, symptoms, experience, care_type, availability)
VALUES 
-- Spanish Language Combinations
('Female', ARRAY['Spanish'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Forgetfulness'], 5, ARRAY['Medication Management'], 'Full Time'),
('Female', ARRAY['Spanish'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Disorientation', 'Agitation'], 4, ARRAY['In-home Medical Care'], 'Full Time'),
('Male', ARRAY['Spanish'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Compulsive behaviour', 'Neglect of personal hygiene'], 3, ARRAY['Cognitive Stimulation Activities'], 'Part Time'),
('Male', ARRAY['Spanish'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Dizziness or fainting'], 5, ARRAY['Daily Living Support'], 'Part Time'),
('Non-binary', ARRAY['Spanish'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Difficulty thinking or understanding'], 3, ARRAY['Mobility Assistance'], '24/7'),
('Non-binary', ARRAY['Spanish'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Loss of interest in activities or people'], 4, ARRAY['Specialised Therapies'], '24/7'),

-- English Language Combinations
('Female', ARRAY['English'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Forgetfulness'], 5, ARRAY['Medication Management'], 'Full Time'),
('Female', ARRAY['English'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Disorientation', 'Agitation'], 4, ARRAY['In-home Medical Care'], 'Full Time'),
('Male', ARRAY['English'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Compulsive behaviour', 'Neglect of personal hygiene'], 3, ARRAY['Cognitive Stimulation Activities'], 'Part Time'),
('Male', ARRAY['English'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Dizziness or fainting'], 5, ARRAY['Daily Living Support'], 'Part Time'),
('Non-binary', ARRAY['English'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Difficulty thinking or understanding'], 3, ARRAY['Mobility Assistance'], '24/7'),
('Non-binary', ARRAY['English'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Loss of interest in activities or people'], 4, ARRAY['Specialised Therapies'], '24/7'),

-- French Language Combinations
('Female', ARRAY['French'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Mental decline', 'Forgetfulness'], 5, ARRAY['Medication Management'], 'Full Time'),
('Female', ARRAY['French'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Disorientation', 'Agitation'], 4, ARRAY['In-home Medical Care'], 'Full Time'),
('Male', ARRAY['French'], 'Male', ARRAY['Lewy Body Dementia'], 
 ARRAY['Compulsive behaviour', 'Neglect of personal hygiene'], 3, ARRAY['Cognitive Stimulation Activities'], 'Part Time'),
('Male', ARRAY['French'], 'Female', ARRAY['Frontotemporal Dementia'], 
 ARRAY['Dizziness or fainting'], 5, ARRAY['Daily Living Support'], 'Part Time'),
('Non-binary', ARRAY['French'], 'Male', ARRAY['Alzheimer''s Disease'], 
 ARRAY['Difficulty thinking or understanding'], 3, ARRAY['Mobility Assistance'], '24/7'),
('Non-binary', ARRAY['French'], 'Female', ARRAY['Vascular Dementia'], 
 ARRAY['Loss of interest in activities or people'], 4, ARRAY['Specialised Therapies'], '24/7')

