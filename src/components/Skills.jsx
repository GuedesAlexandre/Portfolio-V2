import React from "react";
import "./Styles/Skills.css";

const Skills = () => {
  return (
    <>
      <h2 className="Title-Section">02 / Skills</h2>
      <div className="Skills-container">
        <div className="Front">
            <h3 className="Title-Skills">Front</h3>
            <ul class="Skills">
                <li>HTML 5</li>
                <hr></hr>
                <li>CSS 3</li>
                <hr></hr>
                <li>JavaScript</li>
                <hr></hr>
                <li>Next.js</li>
                <hr></hr>
                <li>React.js</li>
                <hr></hr>
                <li>Angular</li>
                <hr></hr>
                <li>GSAP / Three.js</li>
            </ul>
        </div>
        <div className="Back">
        <h3 className="Title-Skills">Back</h3>
        <ul class="Skills">
                <li>PHP / Symfony</li>
                <hr></hr>
                <li>SQL</li>
                <hr></hr>
                <li>Node.js</li>
                <hr></hr>
                <li>Python</li>
                <hr></hr>
                <li>Java</li>
                <hr></hr>
                <li>Express.js / Socket.io </li>
                <hr></hr>
                <li>Docker</li>
            </ul>
        </div>
        <div className="Graph">

        <h3 className="Title-Skills">Graphisme </h3>
        <ul class="Skills">
                <li>Figma</li>
                <hr></hr>
                <li>Adobe Illustrator</li>
                <hr></hr>
                <li>Adobe Photoshop</li>
                <hr></hr>
                <li>Adobe InDesign</li>
                <hr></hr>
                <li>Adobe Premiere Pro</li>
                <hr></hr>
                <li>Adobe AfterEffects </li>
                <hr></hr>
                <li>Canva </li>
                
                
            </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
