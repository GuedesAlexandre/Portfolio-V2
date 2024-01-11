import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import "./App.css"
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
