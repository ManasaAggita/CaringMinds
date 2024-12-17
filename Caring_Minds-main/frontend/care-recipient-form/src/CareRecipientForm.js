import React, { useState } from "react";
import axios from "axios";
import CaregiverProfiles from "./CaregiverProfiles";

function CareRecipientForm() {
  const [formData, setFormData] = useState({
    dementiaType: [],
    behaviouralSymptoms: [],
    emotionalSymptoms: [],
    lifestyleChanges: [],
    movementSymptoms: [],
    languageSymptoms: [],
    otherSymptoms: [],
    dementiaStage: "",
    careType: [],
    genderPreference: "",
    availability: "",
    gender: "",
    languagePreference: [],
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [caregiverProfiles, setCaregiverProfiles] = useState([]); // Store API results
  const [loading, setLoading] = useState(false); // Loading state

  const handleBoxToggle = (field, value) => {
    setFormData((prevData) => {
      const selectedValues = prevData[field];
      const isSelected = selectedValues.includes(value);

      // Toggle selection
      const newSelectedValues = isSelected
        ? selectedValues.filter((item) => item !== value)
        : [...selectedValues, value];

      return {
        ...prevData,
        [field]: newSelectedValues,
      };
    });
  };

  const handleRadioChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Final Form Data Submitted:", formData);
    setLoading(true); // Set loading state

    // Make API call to the backend
    try {
      const response = await axios.post(
        // "http://127.0.0.1:5000/match_caregivers",
        "https://caring-minds-backend.onrender.com/match_caregivers",
        formData,
      );
      console.log("API Response:", response.data);
      setCaregiverProfiles(response.data); 
      setCurrentStep(4); 
    } catch (error) {
      console.error("Error fetching caregiver profiles:", error);
    } finally {
      setLoading(false); 
    }
  };

   // Dynamic page title based on the current step
   const getPageTitle = () => {
    if (currentStep <= 3) {
      return "Personalized Dementia Care Information";
    } else if (currentStep === 4) {
      return "Personalized Dementia Care Results";
    }
    return "";
  };

  return (
    <div>
       {/* Page title */}
       <header className="App-header" style={{ textAlign: "center" }}>
      <h1>{getPageTitle()}</h1>
      </header>

      {/* Form steps */}
      {currentStep <= 3 && (
        <div
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            maxWidth: "600px",
            margin: "20px auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1 */}
            {/*gender/ */}
            {currentStep === 1 && (
              <>
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h3>Select your gender</h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Male",
                      "Female",
                      "Non-binary",
                      "Do not wish to disclose",
                    ].map((gender) => (
                      <div
                        key={gender}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor:
                            formData.gender === gender ? "#007BFF" : "#ccc",
                          backgroundColor:
                            formData.gender === gender ? "#E0F7FA" : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => handleRadioChange("gender", gender)}
                      >
                        {gender}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Language preference*/}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h3>Select your language preference</h3>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    Select one or more language preference.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {["English", "Spanish", "French", "No Preference"].map(
                      (lang) => (
                        <div
                          key={lang}
                          style={{
                            padding: "10px",
                            border: "2px solid",
                            borderColor: formData.languagePreference.includes(
                              lang,
                            )
                              ? "#007BFF"
                              : "#ccc",
                            backgroundColor:
                              formData.languagePreference.includes(lang)
                                ? "#E0F7FA"
                                : "#fff",
                            borderRadius: "8px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleBoxToggle("languagePreference", lang)
                          }
                        >
                          {lang}
                        </div>
                      ),
                    )}
                  </div>
                </div>
                {/*Gender Preference*/}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h3>Select a preferred gender of the caregiver</h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {["Male", "Female", "Non-binary", "No Preference"].map(
                      (preference) => (
                        <div
                          key={preference}
                          style={{
                            padding: "10px",
                            border: "2px solid",
                            borderColor:
                              formData.genderPreference === preference
                                ? "#007BFF"
                                : "#ccc",
                            backgroundColor:
                              formData.genderPreference === preference
                                ? "#E0F7FA"
                                : "#fff",
                            borderRadius: "8px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleRadioChange("genderPreference", preference)
                          }
                        >
                          {preference}
                        </div>
                      ),
                    )}
                  </div>
                </div>
                {/* <button
                  onClick={handleNext}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#0D6EFD",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Next
                </button> */}
              </>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <>
                {/* Dementia Type Selection */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h3>Select the type of dementia</h3>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    Please select all types of dementia that apply to you or
                    your loved ones.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Alzheimer's Disease",
                      "Frontotemporal Dementia",
                      "Lewy Body Dementia",
                      "Vascular Dementia",
                    ].map((type, index) => (
                      <div
                        key={type}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor: formData.dementiaType.includes(type)
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor: formData.dementiaType.includes(type)
                            ? "#E0F7FA"
                            : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => handleBoxToggle("dementiaType", type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Symptoms Selection */}
                {/* Behavioural symptoms */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h3>Select the symptoms</h3>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    Please select all the symptoms that apply to you or your
                    loved ones.
                  </p>
                  <h4> Behavioural Symptoms</h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Mental decline",
                      "Difficulty thinking or understanding",
                      "Forgetfulness",
                      "Impulsive behaviour",
                      "Disorientation",
                      "Lack of consideration for others",
                      "Disorganised or illogical thinking",
                      "Compulsive behaviour",
                    ].map((symptom) => (
                      <div
                        key={symptom}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor: formData.behaviouralSymptoms.includes(
                            symptom,
                          )
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor:
                            formData.behaviouralSymptoms.includes(symptom)
                              ? "#E0F7FA"
                              : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleBoxToggle("behaviouralSymptoms", symptom)
                        }
                      >
                        {symptom}
                      </div>
                    ))}
                  </div>
                </div>
                {/*Emotional symptoms*/}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h4>Emotional Symptoms</h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Agitation",
                      "Difficulty regulating emotions",
                      "Wandering or getting lost",
                      "Loss of interest in activities or people",
                      "Delusions or paranoia",
                      "Apathy",
                    ].map((symptom) => (
                      <div
                        key={symptom}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor: formData.emotionalSymptoms.includes(
                            symptom,
                          )
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor: formData.emotionalSymptoms.includes(
                            symptom,
                          )
                            ? "#E0F7FA"
                            : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleBoxToggle("emotionalSymptoms", symptom)
                        }
                      >
                        {symptom}
                      </div>
                    ))}
                  </div>
                </div>
                {/*Lifestyle changes */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h4>Lifestyle Changes</h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Neglect of personal hygiene",
                      "Excessive sleep or insomnia",
                      "Changes in food preferences",
                      "Sedentary or inactivity",
                    ].map((change) => (
                      <div
                        key={change}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor: formData.lifestyleChanges.includes(
                            change,
                          )
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor: formData.lifestyleChanges.includes(
                            change,
                          )
                            ? "#E0F7FA"
                            : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleBoxToggle("lifestyleChanges", change)
                        }
                      >
                        {change}
                      </div>
                    ))}
                  </div>
                </div>
                {/*Movement Symptoms */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h4>Movement Symptoms</h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Muscle stiffness or rigidity",
                      "Restless leg syndrome",
                      "Shuffling walk or slow movement",
                      "Difficulty combining muscle movements",
                      "Tremors at rest",
                      "Balance issues and falls",
                    ].map((symptom) => (
                      <div
                        key={symptom}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor: formData.movementSymptoms.includes(
                            symptom,
                          )
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor: formData.movementSymptoms.includes(
                            symptom,
                          )
                            ? "#E0F7FA"
                            : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleBoxToggle("movementSymptoms", symptom)
                        }
                      >
                        {symptom}
                      </div>
                    ))}
                  </div>
                </div>

                {/*Language Symptoms */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h4>Language Symptoms</h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Speaking slowly",
                      "Gradual loss of vocabulary",
                      "Difficulty making correct sounds",
                      "Mixing up word order or using incorrect words",
                    ].map((symptom) => (
                      <div
                        key={symptom}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor: formData.languageSymptoms.includes(
                            symptom,
                          )
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor: formData.languageSymptoms.includes(
                            symptom,
                          )
                            ? "#E0F7FA"
                            : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleBoxToggle("languageSymptoms", symptom)
                        }
                      >
                        {symptom}
                      </div>
                    ))}
                  </div>
                </div>
                {/*Other symptoms */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h4>Other Symptoms</h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[
                      "Visual hallucinations",
                      "Urinary incontinence",
                      "Sensitivity to heat or cold",
                      "Smaller handwriting",
                      "Dizziness or fainting",
                      "Anxiety, depression or apathy",
                    ].map((symptom) => (
                      <div
                        key={symptom}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor: formData.otherSymptoms.includes(symptom)
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor: formData.otherSymptoms.includes(
                            symptom,
                          )
                            ? "#E0F7FA"
                            : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleBoxToggle("otherSymptoms", symptom)
                        }
                      >
                        {symptom}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <button
                  onClick={handleNext}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#0D6EFD",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Next
                </button> */}
              </>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <>
                {/* Dementia Stage Selection */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                  <h3>Select the dementia stage</h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {["Mild", "Moderate", "Severe"].map((stage) => (
                      <div
                        key={stage}
                        style={{
                          padding: "10px",
                          border: "2px solid",
                          borderColor:
                            formData.dementiaStage === stage
                              ? "#007BFF"
                              : "#ccc",
                          backgroundColor:
                            formData.dementiaStage === stage
                              ? "#E0F7FA"
                              : "#fff",
                          borderRadius: "8px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleRadioChange("dementiaStage", stage)
                        }
                      >
                        {stage}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Care Type Selection */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <h3>select the type of care</h3>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    Please select all types of care required for you or your
                    loved one.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                      maxWidth: "800px",
                      margin: "0 auto",
                    }}
                  >
                    {[
                      {
                        label: "Medication Management",
                        byline: "Administering prescribed medications",
                      },
                      {
                        label: "Mobility Assistance",
                        byline: "Helping patient move, wheelchair transfers",
                      },
                      {
                        label: "Daily Living Support",
                        byline: "Assistance with dressing, bathing",
                      },
                      {
                        label: "Cognitive Stimulation Activities",
                        byline: "Memory games, mental exercises",
                      },
                      {
                        label: "Specialised Therapies",
                        byline: "Physical therapy, speech therapy",
                      },
                      {
                        label: "Meal Preparation and Feeding Assistance",
                        byline: "Includes meal prep and feeding",
                      },
                      {
                        label: "In-home Medical Care",
                        byline: "Wound care, injections",
                      },
                    ].map((care) => (
                      <div
                        key={care.label}
                        style={{
                          padding: "20px",
                          border: "2px solid",
                          borderColor: formData.careType.includes(care.label)
                            ? "#007BFF"
                            : "#ccc",
                          backgroundColor: formData.careType.includes(
                            care.label,
                          )
                            ? "#E0F7FA"
                            : "#fff",
                          borderRadius: "12px",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: formData.careType.includes(care.label)
                            ? "0 4px 8px rgba(0, 123, 255, 0.3)" 
                            : "0 4px 8px rgba(0, 0, 0, 0.1)",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() => handleBoxToggle("careType", care.label)}
                      >
                        <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                          {care.label}
                        </div>
                        {care.byline && (
                          <small
                            style={{
                              fontStyle: "italic",
                              color: "#555",
                              marginTop: "8px",
                            }}
                          >
                            {care.byline}
                          </small>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Availability Selection */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <h3>Select availability of caregiver</h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    {["Full Time", "Part Time", "24/7"].map(
                      (availabilityOption) => (
                        <div
                          key={availabilityOption}
                          style={{
                            padding: "15px",
                            border: "2px solid",
                            borderColor:
                              formData.availability === availabilityOption
                                ? "#007BFF"
                                : "#ccc",
                            backgroundColor:
                              formData.availability === availabilityOption
                                ? "#E0F7FA"
                                : "#fff",
                            borderRadius: "12px",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "16px",
                            fontWeight: "bold",
                            transition: "all 0.3s ease",
                          }}
                          onClick={() =>
                            handleRadioChange(
                              "availability",
                              availabilityOption,
                            )
                          }
                        >
                          {availabilityOption}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* <button
                  type="submit"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#0D6EFD",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button> */}
              </>
            )}

            {/* Navigation Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  style={{
                    width: "48%",
                    padding: "10px",
                    backgroundColor: "#0D6EFD",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Previous
                </button>
              )}
              {currentStep < 3 && (
                <button
                  onClick={handleNext}
                  style={{
                    width: currentStep > 1 ? "48%" : "100%",
                    padding: "10px",
                    backgroundColor: "#0D6EFD",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Next
                </button>
              )}
              {currentStep === 3 && (
                <button
                  type="submit"
                  style={{
                    width: "48%",
                    padding: "10px",
                    backgroundColor: "#0D6EFD",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {currentStep === 4 && (
        <div>
          {loading ? (
            <p>Loading caregiver profiles...</p>
          ) : (
            <CaregiverProfiles profiles={caregiverProfiles} />
          )}
        </div>
      )}
    </div>
  );
}

export default CareRecipientForm;
