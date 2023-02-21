import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectList } from '../helpers/Data';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const { image, name, about, dataSource, liveLink, codeLink } =
        ProjectList[id - 1];

    return (
        <section className='project'>
            <Link to={'/projects'} className='btn' id='back-btn'>
                Back
            </Link>
            <h1> {name}</h1>
            <div className='img-container'>
                <a href={liveLink} target='_blank' rel='noreferrer'>
                    <img src={image} alt={`${name} pic`} />
                </a>
            </div>

            <a href={liveLink} className='liveLink liveLink2'>
                Live Link
            </a>
            <p>{about}</p>

            <div className='link-container'>
                <a href={codeLink} className='btn'>
                    View Code
                </a>
                {dataSource && (
                    <a href={dataSource} className='btn'>
                        api-used
                    </a>
                )}
            </div>
        </section>
    );
}

export default ProjectDisplay;
