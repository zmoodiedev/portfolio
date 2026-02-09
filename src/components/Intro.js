"use client";

import React from 'react';
import './Intro.css';

const BoltIcon = () => (
    <svg className="bolt" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 15H5.9q-.6 0-.888-.537t.063-1.038l7.475-10.75q.25-.35.65-.487t.825.012t.625.525t.15.8L14 10h3.875q.65 0 .913.575t-.163 1.075L10.4 21.5q-.275.325-.675.425t-.775-.075t-.587-.537t-.163-.788z"/>
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
