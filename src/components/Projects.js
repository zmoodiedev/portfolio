"use client";

import React from 'react';
import Image from 'next/image';
import projectList from '../data/projectList';
import './Projects.css';

const Projects = () => {

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleKeyDown = (e, url) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(url);
        }
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
                        onKeyDown={(e) => handleKeyDown(e, project.url)}
                        role="link"
                        tabIndex={0}
                        aria-label={`View ${project.name} project`}
                    >
                        <div className="project-scanlines" />
                        <div className="project-corner project-corner--tr" />
                        <div className="project-corner project-corner--bl" />

                        <div className="project-image-panel">
                            <Image
                                src={project.img}
                                alt={project.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 405px"
                            />
                            <div className="project-image-gradient" />
                        </div>

                        <div className="project-info-panel">
                            <span className="project-status">{project.status}</span>
                            <h4 className="project-name">{project.name}</h4>
                            <span className="project-description">{project.description}</span>
                            <span className="project-cta">
                                View Project <span className="project-cta-arrow">&rarr;</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
