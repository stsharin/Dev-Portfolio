import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {

    const [description] = useState(
        {
            title: "Hi all, I'm",
            name: "SARABAN TASNIM SHARIN",
            text: "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
            image: "https://i.ibb.co/yQTV6PS/photo.png"
        })

    return (
        <div id="home">
            <Navbar />
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="header__content">
                                <h1>{description.title} <span style={{color: '#997AD7'}}>{description.name}</span> </h1>
                                <p>{description.text}</p>
                                <div className="header__section">
                                    <ul className="header__ul">
                                        <li id="facebook"><a href="/"><FaFacebookF /></a></li>
                                        <li id="insta"><a href="https://www.instagram.com/stsharin/"><FaInstagram /></a></li>
                                        <li id="linkedIn"><a href="https://www.linkedin.com/in/saraban-tasnim-sharin/"><FaLinkedin /></a></li>
                                        <li id="github"><a href="https://github.com/stsharin"><FaGithub /></a></li>
                                    </ul>

                                    <div className="header__buttons">
                                        <a href="/" className="btn btn-smart">Contact Me</a>
                                        &nbsp; &nbsp; &nbsp;
                                        <a href="#contact" className="btn btn-smart">See My Resume</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="banner__img">
                                <img src={description.image} alt="me" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;