import React from 'react';
import './Contact.css'
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillCursorFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div className="contact__section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="contact__details">
                            <h5>Reach Out to me!</h5>
                            <p className="discuss">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                            <h6>"Programming is like invisible CROWN to me 🔥 | Open Source Contributor | Web Developer"</h6>
                            <p className="address"><BsFillCursorFill/> Dhaka, Bangladesh</p>
                            <p className="address">Open for opportunities: Yes</p>
                        </div>
                        <div>
                            <ul className="header__ul">
                                <li id="facebook"><a href="/"><FaFacebookF /></a></li>
                                <li id="insta"><a href="https://www.instagram.com/stsharin/"><FaInstagram /></a></li>
                                <li id="linkedIn"><a href="https://www.linkedin.com/in/saraban-tasnim-sharin/"><FaLinkedin /></a></li>
                                <li id="github"><a href="https://github.com/stsharin"><FaGithub /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="contact_img">
                            <img src="https://i.ibb.co/7SZVSvz/1613172209189.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center cn__footer">
                    <p>Made with ❤️ by ST Sharin</p>
                    <p>© ST Sharin 2021, All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;