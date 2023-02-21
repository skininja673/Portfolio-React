import React from 'react';
import '../styles/Skill.css';
const Skill = ({ name, icon }) => {
    return (
        <div className='skill'>
            <p>{icon}</p>
            <span>{name}</span>
        </div>
    );
};

export default Skill;
