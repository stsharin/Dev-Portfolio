import React from 'react';
import './Proficiency.css'

const Proficiency = () => {
    return (
        <div className="proficiency__section">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="prof__heading">Proficiency</h1>
                        <div className="proficiency">
                            <p>Frontend Development</p>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar skill__bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                            </div>
                            <p>Backend Development</p>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar w-75 skill__bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                            </div>
                            <p>Programming</p>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar skill__bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="proficiency__img">
                            <img src="https://i.ibb.co/mB3WCWY/232339.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proficiency;