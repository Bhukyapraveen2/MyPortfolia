import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [routeName, setRouteName] = useState('#');
    const routeFunc = (navItem) => {
        return routeName === navItem ? "nav-link active text-white navtext-underline" : 'nav-link text-white';
    };

    return (
        <nav className="navbar navbar-expand-md bg-violet fixedElement">
            <div className="container-fluid">
                <a onClick={() => setRouteName('#')} className="navbar-brand text-white cnav-brand" href="#">
                    <h4 style={{ fontWeight: 'bolder' }}>Praveen Bhukya</h4>
                </a>

                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={() => setRouteName('#')}>
                            <a className={routeFunc('#')} href="#">Home</a>
                        </li>
                        <li className="nav-item" onClick={() => setRouteName('skills')}>
                            <a className={routeFunc('skills')} href="#skills">Skills</a>
                        </li>
                        <li className="nav-item" onClick={() => setRouteName('experience')}>
                            <a className={routeFunc('experience')} href="#experience">Experience</a>
                        </li>
                        <li className="nav-item" onClick={() => setRouteName('work')}>
                            <a className={routeFunc('work')} href="#work">Works</a>
                        </li>
                        <li className="nav-item" onClick={() => setRouteName('education')}>
                            <a className={routeFunc('education')} href="#education">Education</a>
                        </li>
                        <li className="nav-item" onClick={() => setRouteName('contact')}>
                            <a className={routeFunc('contact')} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
