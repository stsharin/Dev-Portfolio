import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaPlay , FaArrowRight } from "react-icons/fa";

const Home = () => {

    const [description] = useState(
        {
            title: "I'm Saraban Tasnim Sharin",
            text: "I'm a professional full-stack web developer with lots of experience in this field. I develop MERN projects. I'm a professional full-stack web developer with lots of experience in this field. I develop MERN projects.",
            image: "https://i.ibb.co/1mM7b4V/profile1.png"
        })

    return (
        <div>
            <Navbar />
            <div className="header">
                <div className="container">

                    <div className="row">

                        <div className="col-md-6">

                            <div className="header__content">

                                <h1>{description.title}</h1>
                                <p>{description.text}</p>

                                <div className="header__section">

                                    <ul className="header__ul">
                                        <li><FaFacebookF /></li>
                                        <li><FaInstagram /></li>
                                        <li><FaLinkedin /></li>
                                        <li><FaGithub /></li>
                                        <li><FaTwitter /></li>
                                    </ul>

                                    <div className="header__buttons">
                                        <a href="/" className="btn btn-smart">My Portfolio<FaArrowRight className="play" /></a>
                                    </div>

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