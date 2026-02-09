"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = ({ isActive, activeIndex, navItems, closeNav }) => {

    const handleNavItemClick = (event) => {
        event.preventDefault();
        closeNav();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`nav-wrap ${isActive ? 'active' : ''}`}>
            <nav id="mainNav" className={isActive ? 'active' : ''}>
                <ul>
                    {navItems.map((item, index) => (
                    <li
                        key={item.id}
                        className={`nav-item ${item.path} ${activeIndex === index ? 'active' : ''}`}
                    >
                        <a href={`#${item.path}`} onClick={handleNavItemClick}>
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
            <nav id="socialNav">
                <ul>
                    <li className="nav-item"><a href="https://github.com/zmoodiedev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li className="nav-item"><a href="https://linkedin.com/in/zachmoodie" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;