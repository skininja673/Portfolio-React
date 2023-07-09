import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import '../styles/ProjectDisplay.css';
import '../styles/Diagram.css';
import { myProjects } from '../helpers/Data';

const Diagram = () => {
    const { backIcon } = myProjects;
    const { state } = useLocation();
    const { url } = state.fields.file;
    const title = state.fields.title;

    return (
        <section className='diagram-container'>
            {/* back link */}

            <h1 className='diagram-title'>{title}</h1>
            <img src={url} alt='diagram' className='diagram-image' />
        </section>
    );
};

export default Diagram;
