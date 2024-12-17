import React from "react";
import "./App.css";

function Navigation() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          padding: "10px 20px",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#fff",
          marginTop: "100px",
          width: "98%",
          top: 0,
          position: "relative",
          zIndex: "1000",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="./logo.png" 
            alt="Logo"
            style={{
              marginRight: "10px",
              height: "30px",
              width: "30px",
            }}
          />
          <span style={{ fontSize: "20px", color: "#0D6EFD", fontWeight: "bold" }}>
            Caring Minds
          </span>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "grey",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Go Pro
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#0D6EFD",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: "#0D6EFD",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Register
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
