import React from 'react';
import '../styles/Footer.css';
import { MyInfo } from '../helpers/Data';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                {MyInfo.SocialLinksList.map((item) => {
                    const { id, link, icon, name } = item;
                    return (
                        <a
                            href={link}
                            key={id}
                            target='_blank'
                            rel='noreferrer'
                            title={name}
                        >
                            {icon}
                        </a>
                    );
                })}
            </div>
            <p>
                Built by Akalpit @
                <a
                    href='https://junocollege.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='collegeLink'
                >
                    Juno College
                </a>
            </p>
        </div>
    );
}

export default Footer;
