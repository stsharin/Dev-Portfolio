import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div className="experience__section" id="experience">
            <div className="container">
                <div className="row">
                    <h1 className="exp__heading">Experiences</h1>

                    <div className="col-md-4">
                        <div className="exp__card h-100">
                            <div className="card__banner__one">
                                <div className="card__header">
                                    <h5 >Programming </h5>
                                    <h5>Instructor</h5>
                                </div>
                            </div>
                            <div className="card-body text-center exp__details">
                                <h5>Coder's Club, Emk Center</h5>
                                <h6>Jan 2020 - April 2020</h6>
                                <p>Taught Python programming to students of primary and high school level.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="exp__card h-100">
                            <div className="card__banner__two">
                                <div className="card__header">
                                    <h5 >Software Developer</h5>
                                    <h5>Intern</h5>
                                </div>
                            </div>
                            <div className="card-body text-center exp__details">
                                <h5>Daffodil Software Ltd</h5>
                                <h6>Dec 2020 - May 2021</h6>
                                <p>Worked as a frontend developer in Hospital Virtual Assistant project, developed in Odoo ERP System.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="exp__card h-100">
                            <div className="card__banner__three">
                                <div className="card__header">
                                    <h5 >Programming </h5>
                                    <h5>Instructor</h5>
                                </div>
                            </div>
                            <div className="card-body text-center exp__details">
                                <h5>Programming Instructor</h5>
                                <h6>Jan 2020 - April 2020</h6>
                                <p>Taught Python programming to the university students of 3rd year.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;