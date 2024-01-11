import React, { useState } from 'react';
import '../App.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <div className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
                    {isOpen ? (
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.8341 7.5H35.5146L27.0973 15.6956C25.8718 16.8843 24.2203 17.5507 22.4996 17.5507C20.7791 17.5507 19.1276 16.8843 17.9022 15.6956L9.49141 7.5H4.16748L15.2424 18.2887C19.2544 22.1936 25.7544 22.1936 29.7636 18.2887L40.8341 7.5ZM4.16748 37.5H9.47052L17.9239 29.2783C19.1447 28.0954 20.79 27.4322 22.5039 27.4322C24.2181 27.4322 25.8634 28.0954 27.0842 29.2783L35.5346 37.5H40.8341L29.7339 26.6978C25.737 22.8118 19.2617 22.8118 15.2677 26.6978L4.16748 37.5Z" fill="white"/>
                                </svg>

}
                        </svg>
                    ) : (
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {
                                <svg className='close' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H35V4.375H0V0ZM11.6667 15.3125H35V19.6875H11.6667V15.3125ZM0 30.625H35V35H0V30.625Z" fill="white"/>
                                </svg>
                                
                                
                                
                            }
                        </svg>
                    )}
                </div>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <ul className="navbar-items">
                    <li className="navbar-item1">
                        <a href="#">01 / Home</a>
                    </li>
                    <li className="navbar-item2">
                        <a href="#about"> 02 / About</a>
                    </li>
                    <li className="navbar-item3">
                        <a href="#">03 / Works</a>
                    </li>
                    <li className="navbar-item4">
                        <a href="#">04 / Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;