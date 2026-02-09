"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-wrap">
            <div className="contact-text">
                <h2>Contact Me</h2>
                <p>I am always looking for new opportunities.<br />Whether it&apos;s a new collaboration or just to say hi, I&apos;ll try my best to respond.</p>
            </div>
            <div className="contact-links">
                <a href="mailto:dev@zachmoodie.com" className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>dev@zachmoodie.com</span>
                </a>
                <a href="https://github.com/zmoodiedev" target="_blank" rel="noreferrer" className="contact-item">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>github.com/zmoodiedev</span>
                </a>
                <a href="https://linkedin.com/in/zachmoodie" target="_blank" rel="noreferrer" className="contact-item">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>linkedin.com/in/zachmoodie</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;