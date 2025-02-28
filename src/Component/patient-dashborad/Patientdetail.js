import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PatientStyle.css";

const Patientdetail = () => {
  const { aadhaarNumber } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/patient/${aadhaarNumber}`);
        const data = await response.json();

        if (!response.ok) {
          alert("Invalid Aadhaar Number.");
          return;
        }

        setPatient(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };

    fetchPatient();
  }, [aadhaarNumber]);

  if (loading) return <h2>Loading patient details...</h2>;
  if (!patient) return <h2>Patient not found</h2>;

  return (
    <div>
      <h2>Patient Details</h2>
      <p><strong>👤 Name:</strong> {patient.fullName}</p>
      <p><strong>📌 Date of Birth:</strong> {patient.dob}</p>
      <p><strong>📌 Gender:</strong> {patient.gender}</p>
      <p><strong>📌 Blood Group:</strong> {patient.bloodGroup}</p>
      <p><strong>📌 Contact:</strong> {patient.contactNumber}</p>
      <p><strong>🆔 Aadhaar:</strong> {patient.aadhaarNumber}</p>
      <p><strong>💊 Medical Conditions:</strong> {patient.medicalConditions.join(", ")}</p>
    </div>
  );
};

export default Patientdetail;
