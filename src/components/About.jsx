import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/About.css'

const MonComposant = () => {
    return (
        <div className="container" id="About" style={{marginTop: "5%"}}>
            <h2>About</h2>
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src="src/assets/About.png" alt="Description de l'image" className="img-fluid" style={{ maxWidth: '100%' }} />
                </div>
                <br></br>
                <div className="col-md-8 text-justify">
                    <p style={{textAlign: "justify"}}>Je m’appelle Alexandre Guedes, j’ai 20 ans et je suis originaire de  Paris. Après avoir obtenu mon baccalauréat STI2D avec une spécialisation en Système d'information et numérique, j'ai découvert ma passion pour le développement informatique lors de ma première année de BUT Info. Cette expérience a façonné ma décision de poursuivre mes études en BUT MMI à l'IUT de Meaux, où j'ai approfondi mes compétences en développement web tout en explorant ma créativité.
<br></br> <br></br>
Mon intérêt pour le développement web se renforce au cours de mes études, et j'ambitionne de devenir ingénieur informatique spécialisé dans le développement d'applications web et mobile. Actuellement à la recherche d'opportunités professionnelles, je suis prêt à contribuer avec enthousiasme au monde du développement d'applications web et mobiles, apportant à la fois ma créativité et mes compétences techniques.</p>
                </div>
            </div>
        </div>
    );
};

export default MonComposant;
