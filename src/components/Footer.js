import React from 'react';
import '../styles/Footer.css';
import { myInfo } from '../helpers/Data';

const collegeNameAtFooter = 'JUNO';
function Footer() {
    const { socialLinks, timeline, firstName } = myInfo;
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
                {timeline
                    .filter((item) => {
                        return item.name
                            .toLowerCase()
                            .includes(`${collegeNameAtFooter}`.toLowerCase());
                    })
                    .map((item) => {
                        const {
                            id,
                            name: collegeName,
                            site: collegeSite,
                            image,
                        } = item;
                        return (
                            <a
                                key={id}
                                href={collegeSite}
                                target='_blank'
                                rel='noreferrer'
                                className='liveLink'
                            >
                                {collegeName}
                                <img
                                    src={image}
                                    alt={collegeName}
                                    className='clgImg'
                                />
                            </a>
                        );
                    })}
            </p>
        </div>
    );
}

export default Footer;
