import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from "react-icons/fa";

const Home = () => {

    const [description] = useState(
        {
            title: "I'm ",
            name: "Saraban Tasnim Sharin",
            text: "I'm a professional full-stack web developer with lots of experience in this field. I develop MERN projects. I'm a professional full-stack web developer with lots of experience in this field. I develop MERN projects.",
            image: "https://i.ibb.co/1mM7b4V/profile1.png"
        })

    return (
        <div id="home">
            <Navbar />
            <div className="header">
                <div className="container">

                    <div className="row">

                        <div className="col-md-6">

                            <div className="header__content">

                                <h1>{description.title} <span className="text-info">{description.name}</span> </h1>
                                <p>{description.text}</p>

                                <div className="header__section">

                                    <ul className="header__ul">
                                        <li><a href="/"><FaFacebookF /></a></li>
                                        <li><a href="https://www.instagram.com/stsharin/"><FaInstagram /></a></li>
                                        <li><a href="https://www.linkedin.com/in/saraban-tasnim-sharin/"><FaLinkedin /></a></li>
                                        <li><a href="https://github.com/stsharin"><FaGithub /></a></li>
                                        {/* <li><FaTwitter /></li> */}
                                    </ul>

                                    {/* <div className="header__buttons">
                                        <a href="/" className="btn btn-smart">My Portfolio<FaArrowRight className="play" /></a>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="banner__img">
                                <img src={description.image} alt="me" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;