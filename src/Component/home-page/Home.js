import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeStyle.css";

const Home = () => {
  const navigate = useNavigate();
  const [aadhaar, setAadhaar] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    if (aadhaar.trim().length !== 12) {
      alert("Please enter a valid 12-digit Aadhaar Number.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/patient/${aadhaar}`);
      const data = await response.json();

      if (!response.ok) {
        alert("Invalid Aadhaar Number. Patient not found.");
        return;
      }

      // Navigate to the patient detail page with the Aadhaar number
      navigate(`/patient/detail/${aadhaar}`);
    } catch (error) {
      console.error("Error fetching patient data:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Aadhaar-Linked Smart Health Record System</h1>
      </header>
      <div className="dashboard-cards">
        <div className="card government-dashboard" onClick={() => navigate("/government")}>
          <h2>Government Dashboard</h2>
          <p>Access healthcare analytics and insights.</p>
        </div>
        <div className="card patient-dashboard" onClick={() => setShowModal(true)}>
          <h2>Patient Dashboard</h2>
          <p>View and manage personal health records.</p>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enter Aadhaar Number</h3>
            <input
              type="text"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              maxLength={12}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
