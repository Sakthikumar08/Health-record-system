import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/home-page/Home";
import Patient from "./Component/patient-dashborad/Patient";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient/*" element={<Patient />} />
      </Routes>
    </Router>
  );
};

export default App;
