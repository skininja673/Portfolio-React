import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2010 - 2014'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        abc high school
                    </h3>
                    <p> High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2014 - 2018'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        some university
                    </h3>

                    <h4 className='vertical-timeline-element-subtitle'>
                        Bachelor's Degree
                    </h4>

                    <p> Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2018 - 2020'
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        crew trainer
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        canada
                    </h4>
                    <p>something was done</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='2020 - present'
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        managing crew
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        canada
                    </h4>
                    <p>trying to do something</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
