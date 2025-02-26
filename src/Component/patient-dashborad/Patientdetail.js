import React from "react";
import "./PatientdetailStyle.css";

const Patientdetail = () => {
  return (
    <div className="patient-detail">
      <h2>Patient Details</h2>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Date of Birth:</strong> 12th Jan 1990</p>
      <p><strong>Phone:</strong> +1 234 567 890</p>
      <p><strong>Address:</strong> 123 Main Street, City</p>
      <p><strong>Blood Type:</strong> O+</p>
      <p><strong>Father's Name:</strong> Robert Doe</p>
      <p><strong>Mother's Name:</strong> Jane Doe</p>
    </div>
  );
};

export default Patientdetail;
