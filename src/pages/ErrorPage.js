import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
    return (
        <section className='wrapper'>
            <h1>This is Error !</h1>
            <Link to='/' className='btn'>
                Back
            </Link>
        </section>
    );
};

export default ErrorPage;
