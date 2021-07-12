import React, { useState } from 'react';
import './About.css';
import { FcFlashOn, FcServices } from "react-icons/fc";
import { DiHtml5 } from "react-icons/di";

const About = () => {

    const [description] = useState({
        title: 'What I do',
        details: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
        one: 'Develop highly interactive Front end / User Interfaces for your web and mobile applications',
        two: 'Progressive Web Applications ( PWA ) in normal and SPA Stacks',
        three: 'Integration of third party services such as Firebase/ AWS / Digital Ocean',
        image: 'https://i.ibb.co/VBBX2qx/photo2.png'
    })

    return (
        <div className="about__main" id="about">
            <div className="container">
                <div className="about__section">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about__img">
                                <img src={description.image} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about__text">
                                <h1>{description.title}</h1>
                                <div className="skill__icons">
                                    <ul className="skill__ul">
                                        <li>
                                            <div className="dev-icon"><DiHtml5 /></div>
                                            <p>html-5</p>
                                        </li>
                                        <li>
                                            <DiHtml5 />
                                            <p>html-5</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="skill__details">{description.details}</p>
                                <p className="skill__points"><FcServices /> {description.one}</p>
                                <p className="skill__points"><FcServices /> {description.two}</p>
                                <p className="skill__points"><FcServices /> {description.three}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;