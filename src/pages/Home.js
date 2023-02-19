import React from 'react';
import { Link } from 'react-router-dom';
import { MyInfo } from '../helpers/Data';
import '../App.css';
import '../styles/Home.css';

function Home() {
    const { heading, title, aboutMe } = MyInfo;

    return (
        <div className='home'>
            <div className='about'>
                <h2> {heading}</h2>
                <div className='prompt'>
                    <p>{title}</p>
                </div>
                <a href='#home' className='btn'>
                    About Me
                </a>
            </div>
            <div className='skills' id='home'>
                <h1> About Me</h1>
                <ol className='list'>
                    <li className='item'>
                        <h3> Who am i ?</h3>
                        <span className='intro'> {aboutMe}</span>
                    </li>
                </ol>
                <Link to={'/projects'} className='btn'>
                    My Projects
                </Link>
            </div>
        </div>
    );
}

export default Home;
