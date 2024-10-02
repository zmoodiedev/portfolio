import React from 'react';
import './About.css';
import Knowledge from './Knowledge';

const About = () => {
    return (
        <>
            <div id="aboutText">
                <h2>About Me</h2>
                <p>I'm a full-stack web developer with over 14 years of design and development experience. My passion is creating dynamic web applications that make a difference. I love diving into new technologies and constantly learning new things to keep my skills sharp.</p>
                <p>Whether it's exploring the latest frameworks or discovering innovative solutions, I'm always on the lookout for ways to grow and improve in my field.</p>
            </div>
            <Knowledge />
        </>
    )
};

export default About;