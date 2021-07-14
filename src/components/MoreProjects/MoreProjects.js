import React from 'react';
import './MoreProjects.css';
import { BiCircle } from "react-icons/bi";
import { FcPicture, FcApproval, FcAssistant, FcReading, FcRating, FcDataSheet } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const MoreProjects = () => {
    return (
        <div className="more__project__section">
            <div className="container more__project">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pro__card h-100">
                            <img src="https://i.ibb.co/g3MKbWx/andro.png" alt="" />
                            <div className="card-body pro__details">
                                <h5>Easy Peasy Programming</h5>
                                <p> Build with Android SDK. An android app that can help new programmers to find useful sites like Stack Overflow, Geek for Geeks, Github. It also help users to download code editor and their direct download link. It is a simple app programmers can carry 
                                in their pocket. It will also make programming leaning easy that's why it is named 
                                Easy Peasy Programming</p>
                            </div>
                            <div className="pro__card__footer">
                                <p><BiCircle className="java__icon" /> Java</p>
                                
                                <button className="btn footer__button__git"><AiFillGithub /> Github</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="pro__card h-100">
                            <img src="https://i.ibb.co/qpVdVJR/Untitled-design.png" alt="web" />
                            <div className="card-body pro__details">
                                <h5>Jarvis Desktop Assistant</h5>
                                <p>Made with Python libraries such as pyttsx3, datetime, speech recognition, wikipedia, webbrowser, os, smtplib. Jarvis is a raw python based app. A desktop app that can help you in your daily chores like writing your daily routine. It will also help you to google something, you will deliver command and it will find you the result, same as YouTube, Wikipedia. It can also help to send email over command.</p>
                            </div>
                            <div className="pro__card__footer">
                                <p><BiCircle className="py__icon" /> Python</p>
                                
                                <button className="btn footer__button__git"><AiFillGithub /> Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreProjects;