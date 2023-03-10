// motivation: https://www.npmjs.com/package/react-vertical-timeline-component
import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';
import { myInfo } from '../helpers/Data';

function Experience() {
    const [readMore, setReadMore] = React.useState(true);
    const { timeline, UpIcon } = myInfo;
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                {timeline.map((item) => {
                    const {
                        id,
                        name,
                        site,
                        image,
                        about,
                        year,
                        icon,
                        tag,
                        title,
                        companySite,
                    } = item;

                    // rendering education
                    if (tag === 'student') {
                        return (
                            <VerticalTimelineElement
                                className='vertical-timeline-element--education singleElement'
                                iconStyle={{
                                    // background: '#3e497a',
                                    background: '#E1C340',
                                    color: '#fff',
                                }}
                                date={year}
                                icon={icon}
                                key={id}
                            >
                                <div className='singleElementContainer'>
                                    <div className='imgContainer'>
                                        <a
                                            href={companySite}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <img src={image} alt='name' />
                                        </a>
                                    </div>
                                    <h3 className='title'>{name}</h3>
                                    <h4 className='subTitle'>
                                        {title}
                                        <span>
                                            <a
                                                href={site}
                                                className='liveLink visitLink'
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                Program Link
                                            </a>
                                        </span>
                                    </h4>
                                    <p> {about}</p>
                                </div>
                            </VerticalTimelineElement>
                        );
                    }

                    // rendering work, make sure 'about' section of work must be array, otherwise it will break;
                    return (
                        <VerticalTimelineElement
                            className='vertical-timeline-element--work singleElement'
                            iconStyle={{
                                background: '#3e497a',
                                color: '#fff',
                            }}
                            date={year}
                            icon={icon}
                            key={id}
                        >
                            <div className='singleElementContainer'>
                                <div className='imgContainer'>
                                    <a
                                        href={companySite}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img src={image} alt='name' />
                                    </a>
                                </div>
                                <h3 className='title'>{name}</h3>
                                <h4 className='subTitle'>{title}</h4>
                                {/* ALGO: 
                                (1) if array has more than 3 items, then if 'readMore' is true, then render all items of array and link to collaps
                                     if 'readMore' is false, then render only 3 items and a link to expand                               
                                (2) if array has less than 3 items then render all*/}
                                {about.length > 3 ? (
                                    readMore ? (
                                        <>
                                            <ul className='unorderedList'>
                                                {about
                                                    .slice(0, 3)
                                                    .map((line, ix) => {
                                                        return (
                                                            <li
                                                                className='list'
                                                                key={ix}
                                                            >
                                                                <p>{line}</p>
                                                            </li>
                                                        );
                                                    })}
                                            </ul>
                                            <button
                                                className='liveLink visitLink readMoreBtn'
                                                onClick={() =>
                                                    setReadMore(false)
                                                }
                                            >
                                                read more...
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <ul className='unorderedList'>
                                                {about.map((line, ix) => {
                                                    return (
                                                        <li
                                                            className='list'
                                                            key={ix}
                                                        >
                                                            <p>{line}</p>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <button
                                                className='liveLink visitLink readMoreBtn'
                                                onClick={() =>
                                                    setReadMore(true)
                                                }
                                            >
                                                read less <UpIcon />
                                            </button>
                                        </>
                                    )
                                ) : (
                                    <ul className='unorderedList'>
                                        {about.map((line, ix) => {
                                            return (
                                                <li className='list' key={ix}>
                                                    <p>{line}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
