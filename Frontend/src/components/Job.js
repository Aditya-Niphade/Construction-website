import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Job() {
    const navigate = useNavigate();

    return (
        <>
            <div className="row mb-5">
                <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Careers</h2>
            </div>
            <div class="container ">
                <div class="row align-items-start">
                    <div class="col-xl-6 fs-4">
                        <h2>Job Description</h2>
                        <b>Job Title :</b> Engineer
                        <br />
                        <b>Role : </b> Site Supervisor
                        <br />
                        <b>Experience : </b> : 2 years
                        <br />
                        <b>Qualification :</b> BE / B-Tech / M-Tech in Civil Engineering 
                        Safety/M-Tech Industrial Safety 
                        
                        <br/>
                        <br></br>
                        <h2>Job Description</h2>
                        <b>Job Title :</b> Engineer
                        <br />
                        <b>Role : </b> Design Engineer
                        <br />
                        <b>Experience : </b> : 5 years
                        <br />
                        <b>Qualification :</b> BE / B-Tech / M-Tech in Civil Engineering 
                        CAD 


                    </div>
                    {/* Application form start */}
                    <div class="col-xl-6">
                        <>
                            <div className="container-fluid">

                                <div className="row mb-5">
                                    <div className="row shadow pt-1 ">
                                        <form>
                                            <div className="mb-3">
                                                <img src={require('../images/vc-logo.png')} alt="img" />
                                                <br></br>
                                                <br></br>
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nameOfOwner"
                                                    />
                                                </div>
                                                <label className="form-label">
                                                    Job Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nameOfConstruction"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Contact Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nameOfOwner"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Experience
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="nameOfOwner"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Job Role
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nameOfOwner"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Resume
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="fileUpload"
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-success mt-3 mb-5 me-5">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                    {/* Application form end */}

                </div>
            </div>
        </>
    )
}
