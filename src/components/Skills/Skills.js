import React, { useState } from 'react';
import './Skills.css';
import { FcFlashOn } from "react-icons/fc";
import { FaHtml5 } from "react-icons/fa";

const Skills = () => {

    const [description] = useState({
        title: 'What I do',
        details: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
        one: 'Develop highly interactive Front end / User Interfaces for your web and mobile applications',
        two: 'Progressive Web Applications ( PWA ) in normal and SPA Stacks',
        three: 'Integration of third party services such as Firebase/ AWS / Digital Ocean',
        image: 'https://i.ibb.co/VBBX2qx/photo2.png'
    })

    return (
        <div className="about__main" id="skills">
            <div className="container">
                <div className="about__section">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="about__img">
                                <img src={description.image} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="about__text">
                                <h1>{description.title}</h1>
                                {/* <div className="skill__icons">
                                    <ul className="skill__ul">
                                        <li>
                                            <div className="dev-icon"><FaHtml5 /></div>
                                            <p>html-5</p>
                                        </li>
                                        <li>
                                            <FaHtml5/>
                                            <p>html-5</p>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="skill__text">
                                    <p className="skill__details">{description.details}</p>
                                    <p className="skill__points"><FcFlashOn /> {description.one}</p>
                                    <p className="skill__points"><FcFlashOn /> {description.two}</p>
                                    <p className="skill__points"><FcFlashOn /> {description.three}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;