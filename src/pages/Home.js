import React from 'react';
import { Link } from 'react-router-dom';
import { myInfo } from '../helpers/Data';
import '../App.css';
import '../styles/Home.css';
import Skill from '../components/Skill';

function Home() {
    const { heading, title, skills } = myInfo;

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
                    {/* about myself */}
                    <li className='item'>
                        <h3> Who am i ?</h3>
                        <span className='intro'> {myInfo.introduction()}</span>
                    </li>

                    {/* about my skills */}
                    <li className='item'>
                        <h3>Skills</h3>
                        <div className='skillsContainer'>
                            {skills.map((skill, id) => (
                                <Skill key={id} {...skill} />
                            ))}
                        </div>
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
