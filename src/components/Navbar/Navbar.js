import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-nav">
            <div className="container-fluid">
                <a href="#home"><img src="https://i.ibb.co/MsHTNYz/logos.png" alt="logo" /></a>
                {/* <a className="navbar-brand ms-5" href="#home">Dev Portfolio</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#education">Education</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#experience">Work Experiences</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;