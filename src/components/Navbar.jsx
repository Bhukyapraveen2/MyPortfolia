import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-md bg-violet fixedElement">
            <div className="container-fluid">
                <a className="navbar-brand text-white cnav-brand" href="#"><h4>Vangara Srinivas</h4></a>
                <button className="navbar-toggler text-violet" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar