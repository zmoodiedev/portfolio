"use client";

import React from 'react';
import './Intro.css';

const BoltIcon = () => (
    <svg className="bolt" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 -960 960 960" fill="currentColor">
        <path d="M422-232 582-474H462l36-254-160 242h120l-36 254Z"/>
    </svg>
);

const Intro = () => {
    return (
        <>
            <div className="intro-scanlines" />
            <div className="intro-gradient" />
            <div className="intro-corner intro-corner--tr" />
            <div className="intro-corner intro-corner--bl" />
            <div id="introText">
                <h1>Hey, I'm<br/><span className="highlight">Zach</span></h1>
                <h3>A Full-Stack Web Developer<br/>From Canada</h3>
                <a href="#projects" className="view-portfolio"><BoltIcon /> Check Out My Work</a>
            </div>
        </>
    );
};

export default Intro;
