import React from 'react';
import './Contact.css';

const Contact =() => {
    return (
        <>     
            <h2>Contact Me</h2>
            <p>I am always looking for new opportunities.<br />Whether it's a new collaboration or just to say hi, I'll try my best to respond.</p>
            <ul className="contact-list">
                <li className="contact-method email"><a href="mailto:zach.moodie@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope" aria-hidden="true"></i><span className="sr-only">Email</span></a></li>
                <li className="contact-method github"><a href="https://github.com/zmoodiedev" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true"></i><span className="sr-only">GitHub</span></a></li>
            </ul>
        </>
    )
};

export default Contact;