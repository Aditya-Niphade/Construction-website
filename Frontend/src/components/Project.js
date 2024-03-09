import React from 'react'
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <>
            <div className="cantainer">
                {/*img-start*/}
                <div className="row" style={{ marginBottom: 5 }}>
                    <div>
                        <img src={require('../images/OurProject.jpg')} style={{ width: "100%" }} alt="" />
                    </div>
                </div>
                {/*img-end*/}
                {/*project start*/}
                <h1 style={{ textAlign: "center" }}><b>Projects</b></h1>
                <div className="row" style={{ marginTop: 50, marginBottom: 50 }}>
                    <div className="col-xl-10" style={{ marginLeft: "38%" }}>
                        <button type="button" className="btn btn-primary btn-lg" >
                            Ongoing Project
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button type="button" className="btn btn-primary btn-lg">
                            Completed Project
                        </button>
                    </div>
                </div>

                {/*projects-end*/}

                <div>
                    <div className="row mb-5" style={{ marginLeft: "5%" }} >
                        <div className="col-4">
                            <div className="card" style={{ width: "25rem" }}>
                                <img
                                    src={require('../images/residential4.jpeg')}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text fs-5">
                                        <b>Name:</b> Parksyde homes<br />
                                        <b>Location:</b> Chinckkhed Road, Pimpalgaon Baswant, 422209
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" style={{ width: "25rem" }}>
                                <img
                                    src={require('../images/residential2.png')}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text fs-5">
                                        <b>Name:</b> SkyHigh NX<br />
                                        <b>Location:</b> Gangapur Road, Nashik
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" style={{ width: "25rem" }}>
                                <img
                                    src={require('../images/residential3.png')}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text fs-5">
                                        <b>Name:</b> Godavari Apartments<br />
                                        <b>Location:</b> Govind nagar, Pimpalgaon Baswant, 422209
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mt-5">
                            <div className="card" style={{ width: "25rem" }}>
                                <img
                                    src={require('../images/residential4.jpeg')}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text fs-5">
                                        <b>Name:</b> Vedanand SkyPark<br />
                                        <b>Location:</b> Indira nagar, Nashik, 422009
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-5">
                            <div className="card" style={{ width: "25rem" }}>
                                <img
                                    src={require('../images/residential5.jpeg')}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text fs-5">
                                        <b>Name:</b> Shree Gajanan park<br />
                                        <b>Location:</b> Ganesh Nagar, Umberkhed Road, Pimpalgaon Baswant, 422209
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-4 mt-5">
                            <div className="card" style={{ width: "25rem" }}>
                                <img
                                    src={require('../images/residential4.jpeg')}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-text fs-5">
                                    <b>Name:</b> Parksyde homes<br/> 
                                    <b>Location:</b> Chinckkhed Road, Pimpalgaon Baswant, 422209
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>

        </>
    )
}