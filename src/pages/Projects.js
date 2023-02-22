import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList, projectDisclaimer } from '../helpers/Data';

import '../styles/Projects.css';

function Projects() {
    return (
        <div className='projects'>
            <h1> My Personal Projects</h1>
            <h4>{projectDisclaimer}</h4>
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
