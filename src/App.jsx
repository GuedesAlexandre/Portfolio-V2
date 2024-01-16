import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import "./App.css"
import ProjectDetails from "./components/ProjectDetails";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/acceuil" element={<Acceuil/>}></Route>
            <Route path="/acceuil#works" element={<Acceuil/>}></Route>
            <Route path="/project/:id" element={<ProjectDetails />} />

            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
