import React from 'react'
import {Projet} from '../api/project.js'
import './Styles/Project.css'
import { useNavigate } from "react-router-dom";


const Project = () => {
  let navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/project/${id}`);
  }

  return (
    <>
      <h2 className="Title-Section">03 / Projects</h2>
      <div className="Projects-Container">
        {Projet.map((project) => (
          <div  className="Project" key={project.id} onClick={() => handleOnClick(project.id)}>
            <span>{project.Nom} - {project.Langage}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        ))}
      </div>
      <div className="CTA-Pro">
       <a href="https://github.com/GuedesAlexandre?tab=repositories"> <button>Découvrez en plus !</button></a>
      </div>
    </>
  );
};

export default Project