import React from 'react';
import Typed from 'react-typed';
import '../styles/AutoTyping.css';
import { myInfo } from '../helpers/Data';

function AutoTyping() {
    const { autoTypeSkills } = myInfo;
    return (
        <div className='autoTypeContainer'>
            <div className='child staticContainer'>
                <h3 id='common'>I'm</h3>
            </div>
            <div className='child autoContainer'>
                <Typed
                    className='auto-child'
                    strings={autoTypeSkills}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                >
                    <input type='text' id='common' />
                </Typed>
            </div>
        </div>
    );
}
export default AutoTyping;
