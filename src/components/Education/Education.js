import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <div className="education__section" id="education">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="education__heading">Education</h1>
                        {/* uni */}
                        <div className="container mb-3">
                            <div className="row">
                                <div className="col-md-2 uni__logo">
                                    <img src="https://i.ibb.co/0YZWDHL/585d5f202586b8cd0537e73f44b37780.png" alt="" />
                                </div>
                                <div className="col-md-8 uni__details">
                                    <h5>Daffodil International University</h5>
                                    <h6>Bachelor of Science in Computer Science and Engineering</h6>
                                    <p>May 2017 - April 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="border mb-5"></div>
                        {/* college */}
                        <div className="container mb-3">
                            <div className="row">
                                <div className="col-md-2 uni__logo">
                                    <img src="https://i.ibb.co/2cR0vzW/edu-logo-1.png" alt="" />
                                </div>
                                <div className="col-md-8 uni__details">
                                    <h5>Nawabganj Government College</h5>
                                    <h6>Higher Secondary Certificate</h6>
                                    <p>January 2015 - December 2016</p>
                                </div>
                            </div>
                        </div>
                        <div className="border mb-5"></div>
                        {/* school */}
                        <div className="container mb-3">
                            <div className="row">
                                <div className="col-md-2 uni__logo">
                                    <img src="https://i.ibb.co/2cR0vzW/edu-logo-1.png" alt="" />
                                </div>
                                <div className="col-md-8 uni__details">
                                    <h5>Nawabganj Government Girls' High School</h5>
                                    <h6>Secondary School Certificate</h6>
                                    <p>January 2006 - December 2014</p>
                                </div>
                            </div>
                        </div>
                        <div className="border mb-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;