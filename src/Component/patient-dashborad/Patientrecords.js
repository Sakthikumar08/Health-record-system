import React from "react";
import "./PatientrecordStyle.css"; // Ensure you have a CSS file for styling

const Patientrecords = () => {
  const records = [
    { date: "2024-02-10", doctor: "Dr. Rajesh Kumar", disease: "Fever", medicine: "Paracetamol" },
    { date: "2024-01-28", doctor: "Dr. Priya Sharma", disease: "Stomach Infection", medicine: "Omeprazole" },
    { date: "2023-12-15", doctor: "Dr. Arvind Patel", disease: "Cold & Cough", medicine: "Cetirizine" },
    { date: "2023-11-20", doctor: "Dr. Meena Reddy", disease: "Allergy", medicine: "Loratadine" },
    { date: "2023-10-05", doctor: "Dr. Ramesh Verma", disease: "Headache", medicine: "Ibuprofen" },
    { date: "2023-09-12", doctor: "Dr. Anjali Menon", disease: "Skin Rash", medicine: "Hydrocortisone" },
  ];

  return (
    <div className="patient-records">
      <h2>Medical Records</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor Name</th>
            <th>Disease</th>
            <th>Medicine Used</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.doctor}</td>
              <td>{record.disease}</td>
              <td>{record.medicine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patientrecords;
