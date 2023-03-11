import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <NavLink
                    to='/'
                    className={({ isActive }) => {
                        return isActive ? 'active' : 'hover';
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/projects'
                    className={({ isActive }) => {
                        return isActive ? 'active' : 'hover';
                    }}
                >
                    Projects
                </NavLink>
                <NavLink
                    to='/experience'
                    className={({ isActive }) => {
                        return isActive ? 'active' : 'hover';
                    }}
                >
                    Experience
                </NavLink>
                <NavLink
                    to='/contact'
                    className={({ isActive }) => {
                        return isActive ? 'active' : 'hover';
                    }}
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
