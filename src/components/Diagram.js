import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';

import '../styles/Diagram.css';
import { myProjects } from '../helpers/Data';

const Diagram = () => {
    const { backIcon } = myProjects;
    const { state } = useLocation();
    const id = state.id;
    const title = state.item.fields.diagram.fields.title;
    const diagramUrl = state.item.fields.diagram.fields.file.url;

    return (
        <section className='diagram-container'>
            {/* back link */}

            <Link to={`/project/${id}`} className='specialB' state={state}>
                <img src={backIcon} alt='' className='specialIm' />
                <p className='specialP'>back</p>
            </Link>

            <h1 className='diagram-title'>{title}</h1>
            <img src={diagramUrl} alt='diagram' className='diagram-image' />
        </section>
    );
};

export default Diagram;
