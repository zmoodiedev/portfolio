import React from 'react';
import projectList from '../data/projectList';
import './Projects.css';

const Projects = () => {

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <>
            <h2>Current Projects</h2>
            <div className="projects-wrap">
                {projectList.map((project) => (
                    <div
                        key={project.id}
                        className={`project project-${project.id}`}
                        onClick={() => handleClick(project.url)}
                    >
                        <div className="project-overlay">
                            <h4 className="project-name">{project.name}</h4>
                            <span className="project-description">{project.description}</span>
                            <span className="btn project-btn">View</span>
                        </div>
                        <img src={project.img} alt={project.name} />
                    </div>
                ))}
            </div>
        </>
    )
};

export default Projects;