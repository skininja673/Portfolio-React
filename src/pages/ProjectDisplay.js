import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { myProjects } from '../helpers/Data';
import '../styles/ProjectDisplay.css';
// import dsl from '../assets/cocktail.jpg';
// import dsl from '../assets/dsl.jpg';
import dsl from '../assets/unsplash.JPG';

const ProjectDisplay = () => {
    const { codeIcon, apiIcon, backIcon } = myProjects;
    const { state } = useLocation();
    const { title, url, id, img } = state;

    return (
        <section className='project'>
            <Link to={'/projects'} className='btn' id='back-btn'>
                <div className='backIcon'>
                    <img src={backIcon} alt='' />
                </div>
                Back
            </Link>
            <h1> {title}</h1>

            <div className='img-container' style={{ width: '40%' }}>
                <a href={url} target='_blank' rel='noreferrer'>
                    {/* <img src={img} alt={`${title} pic`} /> */}
                    <img src={dsl} alt={`pic`} />
                </a>
            </div>

            <a
                href={url}
                className='liveLink liveLink2'
                target='_blank'
                rel='noreferrer'
            >
                Live Link
            </a>
            <p>about the app</p>

            <div className='link-container'>
                <a href={url} className='btn codeBtn'>
                    View Code
                    <div id='codeIcon'>
                        <img src={codeIcon} alt='' />
                    </div>
                </a>
                {
                    <a href={'http://google.ca'} className='btn apiBtn'>
                        api-used
                        <div id='apiIcon'>
                            <img src={apiIcon} alt='' />
                        </div>
                    </a>
                }
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
