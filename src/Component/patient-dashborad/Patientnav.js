import React from "react";
import {  useNavigate } from "react-router-dom";
import "./PatientnavStyle.css";
import profile from "../../assets/pass.jpg"

const Patientnav = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="profile-pic">
        <img src={profile} alt="Profile" />
      </div>
      <nav>
        <button onClick={() => navigate("/patient/detail", { replace: true })}>Details</button>
        <button onClick={() => navigate("/patient/records", { replace: true })}>Records</button>
        <button >LogOut</button>
      </nav>
    </div>
  );
};

export default Patientnav;
