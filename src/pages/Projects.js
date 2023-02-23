import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { myProjects } from '../helpers/Data';

import '../styles/Projects.css';

function Projects() {
    const { projectsIntro, projectList } = myProjects;
    return (
        <div className='projects'>
            <h1> My Personal Projects</h1>
            <h4>{projectsIntro}</h4>
            <div className='projectList'>
                {projectList.map((project) => {
                    const { id, name, image } = project;
                    return (
                        <ProjectItem
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
