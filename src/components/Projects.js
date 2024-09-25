import React from 'react';
import projectList from '../data/projectList';
import './Projects.css';

const Projects = () => {

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <>
            <h2>Projects</h2>
            <div className="projects-wrap">
                {projectList.map((project) => (
                    <div
                        key={project.id}
                        className={`project project-${project.id}`}
                        onClick={() => handleClick(project.url)}
                    >
                        <img src={project.img} alt={project.name} />
                    </div>
                ))}
            </div>
        </>
    )
};

export default Projects;