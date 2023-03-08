import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { myProjects } from '../helpers/Data';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const { codeIcon, apiIcon, backIcon } = myProjects;
    const { image, name, about, dataSource, liveLink, codeLink } =
        myProjects.projectList[id - 1];
    return (
        <section className='project'>
            <Link to={'/projects'} className='btn' id='back-btn'>
                <div className='backIcon'>
                    <img src={backIcon} alt='' />
                </div>
                Back
            </Link>
            <h1> {name}</h1>
            <div className='img-container'>
                <a href={liveLink} target='_blank' rel='noreferrer'>
                    <img src={image} alt={`${name} pic`} />
                </a>
            </div>

            <a
                href={liveLink}
                className='liveLink liveLink2'
                target='_blank'
                rel='noreferrer'
            >
                Live Link
            </a>

            <p>{about}</p>

            <div className='link-container'>
                <a href={codeLink} className='btn codeBtn'>
                    View Code
                    <div id='codeIcon'>
                        <img src={codeIcon} alt='' />
                    </div>
                </a>
                {dataSource && (
                    <a href={dataSource} className='btn apiBtn'>
                        api-used
                        <div id='apiIcon'>
                            <img src={apiIcon} alt='' />
                        </div>
                    </a>
                )}
            </div>
        </section>
    );
}

export default ProjectDisplay;
