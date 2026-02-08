"use client";

import React, { useRef } from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import BackToTop from './BackToTop';
import './MainContent.css';

const MainContent = ({ sectionRefs }) => {

    const introRef = useRef(null);

    const scrollToIntro = () => {
        if (introRef.current) {
            introRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="scroll-wrapper">
           <section ref={(el) => { sectionRefs.current[0] = el; introRef.current = el; }} id="intro" className="scroll-section">
                <Intro />
            </section>
            <section ref={(el) => (sectionRefs.current[1] = el)} id="aboutme" className="scroll-section">
                <About />
            </section>
            <section ref={(el) => (sectionRefs.current[2] = el)} id="projects" className="scroll-section">
                <Projects />
            </section>
            <section ref={(el) => (sectionRefs.current[3] = el)} id="contactme" className="scroll-section">
                <Contact />
            </section>
            <BackToTop introRef={introRef} />
        </main>
    )
};

export default MainContent;