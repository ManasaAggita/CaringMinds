import React, { useState } from "react";
import "./App.css";

function CaregiverProfiles({ profiles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 4;

  const totalPages = Math.ceil(profiles.length / profilesPerPage); // Calculate total pages
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile,
  );

  if (profiles.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        No caregivers matched your requirements.
      </p>
    );
  }

  return (
    <div>
      {/* Total caregivers count */}
      <div style={{ textAlign: "left", marginBottom: "20px", marginLeft: "20px", fontSize: "22px", fontWeight: "bold" }}>
        {profiles.length} Caregiver matches found
      </div>
      <div
        style={{
          display: "flex", 
          justifyContent: "space-around", 
          gap: "15px", 
        }}
      >
        {currentProfiles.map((profile, index) => (
          <div
            key={profile.caregiver_id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "22%", 
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img
                src={`https://via.placeholder.com/100?text=Profile+${indexOfFirstProfile + index + 1}`}
                alt="Profile"
                style={{
                  width: "100px", 
                  height: "100px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  marginLeft: "5%",
                }}
              />
              <button
                style={{
                  padding: "15px 15px",
                  marginLeft: "20%",
                  backgroundColor: "#0D6EFD",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Message
              </button>
            </div>
            <div>
              <div className="similarity-score">
                Similarity Score: {(profile.similarity_score.toFixed(2)) + "%"}
              </div>
              <p>
                <strong>Gender:</strong> {profile.caregiver_details.preferred_gender}
              </p>
              <p>
                <strong>Language:</strong>{" "}
                {profile.caregiver_details.language.join(", ")}
              </p>
              <p>
                <strong>Dementia Types:</strong>{" "}
                {profile.caregiver_details.dementia_type.join(", ")}
              </p>
              <p>
                <strong>Symptoms dealt with:</strong>{" "}
                {profile.caregiver_details.symptoms.join(", ")}
              </p>
              <p>
                <strong>Care Types:</strong>{" "}
                {profile.caregiver_details.care_type.join(", ")}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                {profile.caregiver_details.availability}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#0D6EFD",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            marginRight: "10px",
            opacity: currentPage === 1 ? 0.6 : 1,
          }}
        >
          Previous
        </button>
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              indexOfLastProfile < profiles.length ? prev + 1 : prev,
            )
          }
          disabled={indexOfLastProfile >= profiles.length}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#0D6EFD",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor:
              indexOfLastProfile >= profiles.length ? "not-allowed" : "pointer",
            marginLeft: "10px",
            opacity: indexOfLastProfile >= profiles.length ? 0.6 : 1,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CaregiverProfiles;
