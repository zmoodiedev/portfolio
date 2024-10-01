import React from "react";
import CSS from "../assets/logos/css3_logo.svg";
import Github from "../assets/logos/github_logo.svg";
import Git from "../assets/logos/git_logo.svg";
import HTML from "../assets/logos/html5_logo.svg";
import JS from "../assets/logos/js_logo.svg";
import Firebase from "../assets/logos/firebase_logo.svg";
import Node from "../assets/logos/node_logo.svg";
import Python from "../assets/logos/python_logo.svg";
import ReactJS from "../assets/logos/react_logo.svg";
import "./Knowledge.css";

const Knowledge = () => {
    return (
        <div id="knowledgeWrap">
            <div className="logo language-1 html"><img src={HTML} alt="HTML" title="HTML 5" /></div>
            <div className="logo language-2 css"><img src={CSS} alt="CSS" title="CSS 3" /></div>
            <div className="logo language-3 js"><img src={JS} alt="JS" title="JavaScript" /></div>
            <div className="logo language-4 react"><img src={ReactJS} alt="React" title="React" /></div>
            <div className="logo language-5 git"><img src={Git} alt="Git" title="Git" /></div>
            <div className="logo language-6 node"><img src={Node} alt="Node" title="Node" /></div>
            <div className="logo language-7 python"><img src={Python} alt="Python" title="Python" /></div>
            <div className="logo language-8 firebase"><img src={Firebase} alt="Firebase" title="Firebase" /></div>
            <div className="logo language-9 github"><img src={Github} alt="Github" title="Github" /></div>
        </div>
    )
};

export default Knowledge; 