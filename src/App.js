import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patient from "./Component/patient-dashborad/Patient";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; // ✅ Make sure this line exists
