import React, { forwardRef } from 'react';
import './Intro.css';

const Intro = forwardRef((ref) => {
    return (
        <>
            <div id="introText">
                <h1>Hi, I'm<br/><span className="highlight">Zach</span></h1>
                <h3>A Web Designer/Developer<br/>From Canada</h3>
                <a href="#projects" className="view-portfolio"><span className="bolt material-symbols-rounded">bolt</span> Check Out My Work</a>
            </div>
        </>
    );
});

export default Intro;