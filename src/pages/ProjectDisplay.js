import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectList } from '../helpers/Data';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const { image, name, about, dataSource, liveLink, codeLink } =
        ProjectList[id];

    return (
        <section className='project'>
            <Link to={'/Projects'} className='btn' id='back-btn'>
                Back
            </Link>
            <h1> {name}</h1>
            <div className='img-container'>
                <a href={liveLink} target='_blank' rel='noreferrer'>
                    <img src={image} alt={`${name} pic`} />
                </a>
            </div>

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
