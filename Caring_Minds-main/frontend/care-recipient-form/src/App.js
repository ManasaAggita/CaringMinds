import React from "react";
import "./App.css";
import CareRecipientForm from "./CareRecipientForm";
import Navigation from "./nav"

function App() {
  return (
    <div className="App">
      <Navigation />

      {/* Page Content
      <header className="App-header" style={{ textAlign: "center" }}>
        <h1>Personalized Dementia Care Information</h1>
      </header> */}

      <div className="container">
        <CareRecipientForm />
      </div>
    </div>
  );
}

export default App;
