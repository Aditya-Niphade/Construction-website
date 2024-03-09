import React, { useEffect } from 'react'
import VideoConstruct from '../videos/VideoConstruct'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Design() {
  const navigate = useNavigate();
  useEffect((e) => {
    if (Cookies.get('authenticated') == null) {
      navigate("/login")
    }else{
      navigate("/design")
    }
  });
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <h1 className="fs-1 fw-bold mt-3 mb-5 shadow pt-3">DESIGN</h1>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <VideoConstruct></VideoConstruct>
          </div>
          <div className="col-xl-4 mt-5">
            <div className="row mt-5">
              <h2 className="fs-1 fw-bold">YASHONAND NIVAS</h2>
              <hr></hr>
            </div>
            <div className="row mt-3">
              <h2>Mr. & Mrs. Khote</h2>
              <h2>Somvar peth Karkamb 413302</h2>
            </div>
            <div className="row mt-3">
              <h2>01-08-2008</h2>
            </div>
          </div>
        </div>
        <hr className="row shadow pt-3"></hr>
        {/* First Layout */}
        <div className="row">
          <div className="row mt-5">
            <h2
              className="fs-1 fw-bold shadow pt-3 "
              style={{ marginLeft: "30px" }}
            >
              Ongoing Phase
            </h2>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-xl-4">
              <div className="row mt-5">
                <h2 className="fs-1 fw-bold " style={{ marginLeft: "30px" }}>
                  Design
                </h2>
                <hr></hr>
              </div>
              <div
                className="row fs-2 mt-2"
                style={{ marginLeft: "30px", textAlign: "justify" }}
              >
                Design considerations for construction projects involve various
                aspects ranging from architectural design to structural
                engineering, materials selection, and environmental
                sustainability
              </div>
            </div>
            <div className="col-xl-8 ">
              <img src={require("../images/LayoutPhoto_1.jpg")} alt="img" />
            </div>
          </div>
        </div>
        {/* Second Layout */}
        <div className="row mt-5">
          <div className="col-xl-8 ">
            <img src={require("../images/LayoutPhoto_1.jpg")} alt="img" />
          </div>
          <div className="col-xl-4">
            <div className="row mt-5">
              <h2 className="fs-1 fw-bold " style={{ marginLeft: "30px" }}>
                Design
              </h2>
              <hr></hr>
            </div>
            <div
              className="row fs-2 mt-2"
              style={{ marginLeft: "30px", textAlign: "justify" }}
            >
              Design considerations for construction projects involve various
              aspects ranging from architectural design to structural
              engineering, materials selection, and environmental sustainability
            </div>
          </div>
        </div>
        {/* Third Layout */}
        <div className="row mt-5 mb-5">
          <div className="col-xl-4">
            <div className="row mt-5">
              <h2 className="fs-1 fw-bold " style={{ marginLeft: "30px" }}>
                Design
              </h2>
              <hr></hr>
            </div>
            <div
              className="row fs-2 mt-2"
              style={{ marginLeft: "30px", textAlign: "justify" }}
            >
              Design considerations for construction projects involve various
              aspects ranging from architectural design to structural
              engineering, materials selection, and environmental sustainability
            </div>
          </div>
          <div className="col-xl-8 ">
            <img src={require("../images/LayoutPhoto_1.jpg")} alt="img" />
          </div>
        </div>
        <h1
          className="row fw-bold shadow pt-3"
          style={{ marginLeft: "30px", marginBottom: "15px" }}
        >
          3D Model Design
        </h1>
        {/* 3D Model Interior Design */}
        <div className="row mt-5">
          <div className="col-xl-4">
            <div className="row mt-5">
              <h2 className="fs-1 fw-bold " style={{ marginLeft: "30px" }}>
                Interior Design
              </h2>
              <hr></hr>
            </div>
            <div
              className="row fs-2 mt-2"
              style={{ marginLeft: "30px", textAlign: "justify" }}
            >
              Design considerations for construction projects involve various
              aspects ranging from architectural design to structural
              engineering, materials selection, and environmental sustainability
            </div>
          </div>
          <div className="col-xl-8 ">
            <img src={require("../images/interiror.jpg")} alt="img" />
          </div>
        </div>
        {/* 3D Model Exterior Design */}
        <div className="row mt-5">
          <div className="row mt-5">
            <div className="col-xl-8 shadow pt-1">
              <img src={require("../images/3d_ext1.png")} alt="img" />
            </div>
            <div className="col-xl-4">
              <div className="row mt-5">
                <h2 className="fs-1 fw-bold " style={{ marginLeft: "30px" }}>
                  Exterior Design
                </h2>
                <hr></hr>
              </div>
              <div
                className="row fs-2 mt-2"
                style={{ marginLeft: "30px", textAlign: "justify" }}
              >
                Design considerations for construction projects involve various
                aspects ranging from architectural design to structural
                engineering, materials selection, and environmental
                sustainability
              </div>
            </div>
          </div>
        </div>

        {/* Location */}

        {/* second Location */}
        <div className="row mt-5">
          <h1
            className="row fw-bold shadow pt-3"
            style={{ marginLeft: "30px", marginBottom: "15px" }}
          >
            Location
          </h1>
          <div className="container-fluid  " style={{ padding: "5%" }}>
            <div className="row">
              <div className="col-4">
                <h3>CORPORATE / HEAD OFFICE</h3>
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>{" "}
                &nbsp; &nbsp; &nbsp; Pandharpur - Tembhurni Rd, Pandharewasti,
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pandharpur, Karkamb,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maharashtra
                413302
                <br />
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>{" "}
                &nbsp; &nbsp; &nbsp; 09096709624
                <br />
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-mailbox"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z" />
                  <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0" />
                </svg>
                &nbsp; &nbsp; &nbsp;dhanaji123@gmail.com
              </div>
              <div className="col-8 shadow-lg p-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.5605396618766!2d75.28921117420398!3d17.85922448904313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4157db7d33435%3A0xd386cbc356e0c77e!2sDhanraj%20Construction%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1707244333983!5m2!1sen!2sin"
                  width={950}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
        {/*crousal*/}
        <div className="row mb-5">
          <div className="row">
            <h1 className='fs-1 fw-bold mt-3 mb-5 shadow pt-3 lh-base'>Site Images</h1>
          </div>
          <div
            style={{ margin: 10 }}
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval={4000}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="row">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={require("../images/crousal1.jpg")}
                        className="d-block w-100 shadow-lg p-1"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
