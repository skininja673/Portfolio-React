import React from 'react';
import '../styles/Footer.css';
import { myInfo } from '../helpers/Data';

function Footer() {
    const { socialLinks, colleges, firstName } = myInfo;
    return (
        <div className='footer'>
            <div className='socialMedia'>
                {socialLinks.map((item) => {
                    const { id, link, icon } = item;
                    return (
                        <a
                            href={link}
                            key={id}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {icon}
                        </a>
                    );
                })}
            </div>
            <p>
                Built by {firstName} @
                <a
                    href={colleges[0].clgSite}
                    target='_blank'
                    rel='noreferrer'
                    className='liveLink'
                >
                    {colleges[0].clgName}
                    <img
                        src={colleges[0].image}
                        alt={colleges[0].clgName}
                        className='clgImg'
                    />
                </a>
            </p>
        </div>
    );
}

export default Footer;
