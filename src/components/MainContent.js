import React from 'react';
import Intro from './Intro';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Contact from './Contact';
import './MainContent.css';

const MainContent = ({ sectionRefs }) => {
    return (
        <main className="scroll-wrapper">
           <section ref={(el) => (sectionRefs.current[0] = el)} id="intro" className="scroll-section">
                <Intro />
            </section>
            <section ref={(el) => (sectionRefs.current[1] = el)} id="aboutme" className="scroll-section">
                <About />
            </section>
            <section ref={(el) => (sectionRefs.current[2] = el)} id="blog" className="scroll-section">
                <Blog />
            </section>
            <section ref={(el) => (sectionRefs.current[3] = el)} id="projects" className="scroll-section">
                <Projects />
            </section>
            <section ref={(el) => (sectionRefs.current[4] = el)} id="contactme" className="scroll-section">
                <Contact />
            </section>
        </main>
    )
};

export default MainContent;