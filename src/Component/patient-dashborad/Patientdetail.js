import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PatientStyle.css";

const Patientdetail = () => {
  const { aadhaarNumber } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      setLoading(true); 
      try {
        const response = await fetch(`http://localhost:5001/api/patient/${aadhaarNumber}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (!data || Object.keys(data).length === 0) {
          throw new Error("Empty response received.");
        }
  
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient details:", error);
        alert(`Error: ${error.message}`);
      } finally {
        setLoading(false); // Ensure loading state is removed after fetching
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
      <p><strong>📧 Email:</strong> {patient.email}</p>
      <p><strong>🏠 Address:</strong> {patient.address?.street}, {patient.address?.city}, {patient.address?.state}, {patient.address?.pincode}, {patient.address?.country}</p>
      <p><strong>💼 Occupation:</strong> {patient.occupation}</p>
      <p><strong>📏 Height:</strong> {patient.height} cm</p>
      <p><strong>⚖ Weight:</strong> {patient.weight} kg</p>
      <p><strong>🆔 Aadhaar:</strong> {patient.aadhaarNumber}</p>
      <p><strong>📱 Linked Mobile:</strong> {patient.linkedMobile}</p>
      <p><strong>💊 Medical Conditions:</strong> {patient.medicalConditions.join(", ")}</p>
      <p><strong>🤧 Allergies:</strong> {patient.allergies.join(", ")}</p>
      <p><strong>💊 Medications:</strong> {patient.medications.join(", ")}</p>
      <p><strong>🏥 Previous Surgeries:</strong> {patient.previousSurgeries.join(", ")}</p>
      <p><strong>💉 Vaccinations:</strong> {patient.vaccinations.join(", ")}</p>
      <p><strong>👨‍⚕ Doctor Assigned:</strong> {patient.doctorAssigned}</p>
      <p><strong>📅 Last Consultation:</strong> {new Date(patient.lastConsultation).toLocaleDateString()}</p>
      <p><strong>🩺 Smart Health Card Expiry:</strong> {new Date(patient.smartHealthCardExpiry).toLocaleDateString()}</p>
      <p><strong>📄 Insurance Schemes:</strong> {patient.insuranceSchemes.join(", ")}</p>
      <p><strong>📜 Government ID Proofs:</strong> PAN: {patient.governmentIDProofs?.panCard}, Voter ID: {patient.governmentIDProofs?.voterID}, DL: {patient.governmentIDProofs?.drivingLicense}</p>
      <p><strong>🚨 Emergency Contact:</strong> {patient.emergencyContact?.name} ({patient.emergencyContact?.relation}) - {patient.emergencyContact?.phone}</p>
    </div>
  );
};

export default Patientdetail;