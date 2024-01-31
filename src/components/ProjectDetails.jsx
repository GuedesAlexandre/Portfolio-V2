import React from 'react';
import { useParams } from 'react-router-dom';
import { Projet } from '../api/project.js';
import Navbar from './Navbar.jsx';
import '../App.css'
import Cursor from './cursor.jsx';
import NavbarExterne from './NavExterne.jsx';

const ProjectDetails = () => {

  let { id } = useParams();
  id = Number(id); // Convertir l'ID en nombre
  let project = Projet.find(project => project.id === id);

  return (
    <div>
      <Cursor/>
      <NavbarExterne/>
      <h2>{project.Nom}</h2>
      <p>{project.Langage}</p>
      {/* Affichez ici les autres détails du projet */}
    </div>
  );
};

export default ProjectDetails;