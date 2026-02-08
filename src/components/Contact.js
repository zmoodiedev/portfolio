"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact =() => {
    return (
        <>     
            <h2>Contact Me</h2>
            <p>I am always looking for new opportunities.<br />Whether it's a new collaboration or just to say hi, I'll try my best to respond.</p>
            <ul className="contact-list">
                <li className="contact-method email"><a href="mailto:zach.moodie@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /><span className="sr-only">Email</span></a></li>
                <li className="contact-method github"><a href="https://github.com/zmoodiedev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /><span className="sr-only">GitHub</span></a></li>
            </ul>
        </>
    )
};

export default Contact;