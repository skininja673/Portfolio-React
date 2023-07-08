import React from 'react';
// import Hero from './Hero';
import '../styles/Proj.css';
import { useFetchProjects } from '../fetchProjects';
import { Link } from 'react-router-dom';

// import dsl from '../assets/cocktail.jpg';
// import dsl from '../assets/dsl.jpg';
// import dsl from '../assets/unsplash.JPG';
import dsl from '../assets/erd.JPG';

export const Proj = () => {
    const { loading, projects } = useFetchProjects();

    if (loading) {
        return (
            <section className='projecs'>
                <h2>loading...</h2>
            </section>
        );
    }

    return (
        <>
            <div className='projects'>
                <h1> My Personal Projects</h1>
                <span className='underline' />
                <h4>
                    Welcome to my projects page! I enjoy coding in React,
                    Javascript, HTML and CSS, and am consistently upgrading my
                    skills to tackle more complex problems. You are welcome to
                    view the code and any comments or suggestions are highly
                    appreciated
                </h4>
            </div>

            <section className='projecs'>
                <div className='projecs-center'>
                    {projects.map((project) => {
                        const { id, img, url, title } = project;

                        return (
                            <Link
                                key={id}
                                className='projec'
                                to={`/project/${id}`}
                                state={project}
                            >
                                {/* <img src={img} alt={title} className='img' /> */}
                                <img src={dsl} alt='asdf' className='img' />
                                <p className='proj-title'>{title}</p>
                            </Link>
                        );
                        // return (
                        //     <a
                        //         href={url}
                        //         key={id}
                        //         target='_blank'
                        //         rel='noreferrer'
                        //         className='projec'
                        //     >
                        //         <img src={img} alt={title} className='img' />
                        //         <p className='proj-title'>{title}</p>
                        //     </a>
                        // );
                    })}
                </div>
            </section>
        </>
    );
};
export default Proj;
