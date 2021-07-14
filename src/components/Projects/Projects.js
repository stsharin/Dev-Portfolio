import React from 'react';
import './Projects.css';
import { BiCircle } from "react-icons/bi";
import { FcStart } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import MoreProjects from '../MoreProjects/MoreProjects';

const Projects = () => {
    return (
        <div className="project__section" id="projects">
            <div className="container">
                <div className="row">
                    <h1 className="project__heading">Open Source Projects</h1>

                    <div className="col-md-6">
                        <div className="pro__card h-100">
                            <img src="https://i.ibb.co/zN7Tk9f/mern-1.png" alt="" />
                            <div className="card-body pro__details">
                                <h5>Readers Club</h5>
                                <p> This is a book shop app. Users can buy books after login with Gmail. Without login, the user can't check out a book. After getting authentication user can check out a book and can see the book details and total price. An old user can check their previous ordered list. There is also an Admin panel, where the admin can add and manage books.</p>
                            </div>
                            <div className="pro__card__footer">
                                <p><BiCircle className="js__icon"/> JavaScript</p>
                                <button className="btn footer__button__live"><FcStart/> Live Site</button>
                                <button className="btn footer__button__git"><AiFillGithub/> Github</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="pro__card h-100">
                            <img src="https://i.ibb.co/zN7Tk9f/mern-1.png" alt="web" />
                            <div className="card-body pro__details">
                                <h5>Super Hero Network</h5>
                                <p> In SuperHero Network, you can register here as a superhero to donate and help the needy people around us. You can also check our superhero list. But you have to log in first with your Gmail. After the Gmail authentication, we'll allow you to enter and we'll store the data in our database for your best experience.</p>
                            </div>
                            <div className="pro__card__footer">
                                <p><BiCircle className="js__icon"/> JavaScript</p>
                                <button className="btn footer__button__live"><FcStart/> Live Site</button>
                                <button className="btn footer__button__git"><AiFillGithub/> Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MoreProjects/>
        </div>
    );
};

export default Projects;