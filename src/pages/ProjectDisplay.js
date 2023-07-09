import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { myProjects } from '../helpers/Data';
import '../styles/ProjectDisplay.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import dsl from '../assets/cocktail.jpg';
// import dsl from '../assets/dsl.jpg';
import dsl from '../assets/unsplash.JPG';

const ProjectDisplay = () => {
    const { codeIcon, apiIcon, backIcon } = myProjects;
    const { state } = useLocation();
    const { title, url, id, img, item } = state;
    const {
        about,
        githubLink,
        hasApi,
        hasDiagram,
        hasDesign,
        apiUsed,
        designLink,
        diagram,
    } = item.fields;

    return (
        <section className='project'>
            {/* back link */}
            <Link to={'/projects'} className='btn' id='back-btn'>
                <div className='backIcon'>
                    <img src={backIcon} alt='' />
                </div>
                Back
            </Link>

            {/* title */}
            <h1 style={{ textTransform: 'uppercase' }}> {title}</h1>

            {/* app image */}
            <div className='img-container'>
                <a href={url} target='_blank' rel='noreferrer'>
                    <img src={img} alt={`pic`} />
                </a>
            </div>

            {/* live link */}
            <div className='cust-container'>
                <a
                    href={url}
                    className='liveLink liveLink2'
                    target='_blank'
                    rel='noreferrer'
                >
                    Live Link
                </a>

                {/* design link */}
                {hasDesign && (
                    <a
                        href={designLink}
                        className='liveLink liveLink2'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Design Link
                    </a>
                )}

                {/* diagram image */}
                {hasDiagram && (
                    <Link
                        to='/diagram'
                        className='liveLink liveLink2'
                        state={diagram}
                    >
                        ERD Relationship
                    </Link>
                )}
            </div>

            {/* about section */}

            <div className='richText'>{documentToReactComponents(about)}</div>
            {console.log('ABOUT: ', about.content)}

            <div className='link-container'>
                {/* github link */}
                <a
                    href={githubLink}
                    className='btn codeBtn'
                    target='_blank'
                    rel='noreferrer'
                >
                    view code
                    <div id='codeIcon'>
                        <img src={codeIcon} alt='' />
                    </div>
                </a>

                {/* api used */}

                {hasApi && (
                    <a
                        href={apiUsed}
                        className='btn apiBtn'
                        target='_blank'
                        rel='noreferrer'
                    >
                        api-used
                        <div id='apiIcon'>
                            <img src={apiIcon} alt='' />
                        </div>
                    </a>
                )}
            </div>
        </section>
    );
};

export default ProjectDisplay;

// adjusted size for image:  W: 1280px,  H: 682px

// function ProjectDisplay() {
//     const { id } = useParams();
//     const { codeIcon, apiIcon, backIcon } = myProjects;
//     const { image, name, about, dataSource, liveLink, codeLink } =
//         myProjects.projectList[id - 1];
//     return (
//         <section className='project'>
//             <Link to={'/projects'} className='btn' id='back-btn'>
//                 <div className='backIcon'>
//                     <img src={backIcon} alt='' />
//                 </div>
//                 Back
//             </Link>
//             <h1> {name}</h1>
//             <div className='img-container'>
//                 <a href={liveLink} target='_blank' rel='noreferrer'>
//                     <img src={image} alt={`${name} pic`} />
//                 </a>
//             </div>

//             <a
//                 href={liveLink}
//                 className='liveLink liveLink2'
//                 target='_blank'
//                 rel='noreferrer'
//             >
//                 Live Link
//             </a>

//             <p>{about}</p>

//             <div className='link-container'>
//                 <a href={codeLink} className='btn codeBtn'>
//                     View Code
//                     <div id='codeIcon'>
//                         <img src={codeIcon} alt='' />
//                     </div>
//                 </a>
//                 {dataSource && (
//                     <a href={dataSource} className='btn apiBtn'>
//                         api-used
//                         <div id='apiIcon'>
//                             <img src={apiIcon} alt='' />
//                         </div>
//                     </a>
//                 )}
//             </div>
//         </section>
//     );
// }

// export default ProjectDisplay;
