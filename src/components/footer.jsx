import React, { useState, useRef } from 'react';
import './Styles/footer.css'
import Cursor from './cursor';

const Footer = () => {
  

  return (
    <div>
       
        <footer >
            <div className="Footer-Container">
               <div class="info1">
                <h3>Me contacter</h3>
                <span>alexandreguedes77600@gmail.com</span>
                <span>+33 06 61 50 60 29</span>

               </div>
               <div class="info2">
                <h3>Navigation</h3>
                <span>01 / About</span>
            
                <span>02 / Works</span>
            
                <span>03 / Contact</span>
            
               </div>
               <div class="info3">
                <h3>Mes réseaux</h3>
                <span>LinkedIn</span>
                <span>Github</span>
               </div>

               </div>
               <div class="Mentions">
               Fait avec ❤️ par Alexandre Guedes | © 2023 Copyright 
               </div>
        </footer>
    </div>
  )
}

export default Footer