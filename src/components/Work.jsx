import React from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/work5.jpg';
import work6 from '../assets/work6.jpg';

const Work = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a default duration
    }, []);

    const projects = [
        {
            item: work1,
            fade: 'fade-right',
            title: 'E-commerce Platform',
            description: 'A full-stack application with user authentication, product management, and payment processing.',
            technologies: 'React, Node.js, Express, MongoDB',
        },
        {
            item: work2,
            fade: 'fade-up',
            title: 'Social Media Dashboard',
            description: 'A dashboard for tracking and managing social media analytics with real-time updates.',
            technologies: 'React.js, Firebase, Chart.js',
        },
        {
            item: work3,
            fade: 'fade-left',
            title: 'Personal Portfolio Website',
            description: 'A responsive, SEO-optimized personal website showcasing skills and projects.',
            technologies: 'Node.js, Tailwind CSS',
        },
        {
            item: work4,
            fade: 'fade-right',
            title: 'Task Management App',
            description: 'A real-time collaborative task management tool with user roles and notifications.',
            technologies: 'React.js, NodeJs, PostgreSQL, Socket.IO',
        },
        {
            item: work5,
            fade: 'fade-up',
            title: 'Online Learning Platform',
            description: 'A platform offering video courses, quizzes, and progress tracking.',
            technologies: 'Django, React, AWS',
        },
        {
            item: work6,
            fade: 'fade-left',
            title: 'Weather Forecasting App',
            description: 'A web app providing real-time weather updates using external APIs.',
            technologies: 'React, Redux, OpenWeather API',
        },
    ];

    return (
        <div className="container-fluid mt-4" id='work'>
            <div className='text-center'>
                <h2 className='border-bottom pb-1 text-violet work-title mb-5' style={{ width: 'fit-content', margin: '0 auto', fontWeight: 'bold' }}>
                    Projects
                </h2>
            </div>
            <div className='container mt-4'>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className='col-md-4 mb-4' data-aos={project.fade} data-aos-delay="200">
                            <div className="card project-card" style={{ border: 'none', overflow: 'hidden', borderRadius: '15px' }}>
                                <img src={project.item} alt={project.title} className='card-img-top work-image' />
                                <div className="card-body">
                                    <h5 className="card-title text-center project-title">{project.title}</h5>
                                    <p className="card-text text-center project-description">{project.description}</p>
                                    <p className="card-text text-center project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
