import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">Dev Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#">Education</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#">Experience</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="#">Projects</a>
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