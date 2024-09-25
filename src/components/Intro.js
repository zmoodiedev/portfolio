import React from "react";
import './Intro.css';

const Intro = () => {
    return (
        <>
            <h1>Hi, I'm <span className="highlight">Zach</span>.<br/>
            I'm a Web Developer</h1>
            <a href="#projects" className="btn">Check Out My Work</a>
        </>
    )
}

export default Intro;