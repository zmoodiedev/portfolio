import React from "react";
import './Intro.css';

const Intro = () => {
    return (
        <>
            <h1>Hi, I'm <span className="highlight">Zach</span>,</h1>
            <h2>I'm A Web Developer From Canada.</h2>
            <a href="#projects" className="btn">Check Out My Work</a>
        </>
    )
}

export default Intro;