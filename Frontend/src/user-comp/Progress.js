import React, { useEffect } from 'react'
import VideoConstruct from '../videos/VideoConstruct'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Design', value: 125 },
  { name: 'Land & Foundatation', value: 500 },
  { name: 'Mechanical', value: 100 },
  { name: 'Electrical', value: 200 },
  { name: 'Plumbing', value: 278 },
  { name: 'Waterprofing', value: 189 },
  { name: 'Coloring', value: 189 },
  { name: 'Finishing', value: 189 },
];

export default function Progress() {
  const navigate = useNavigate();
  useEffect((e) =>{
    if(Cookies.get('authenticated') == null){
      navigate("/login")
    }
  });
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <h1 className='fs-1 fw-bold mt-3 mb-5 shadow pt-3 lh-base'>PROGRESS</h1>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <VideoConstruct></VideoConstruct>
          </div>
          <div className="col-xl-4 mt-5">
            <div className="row mt-5">
              <h2 className='fs-1 fw-bold'>YASHONAND NIVAS</h2>
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
        <div className="row">
          <div className="row mt-5">
            <h2 className='fs-1 fw-bold shadow pt-3 lh-base'>Ongoing Phase</h2>
          </div>
          <div className="row mt-5">
            <div className="col-xl-4">
              <div className="row mt-5">
                <h2 className='fs-1 fw-bold ' style={{ marginLeft: '30px' }}>Design</h2>
                <hr className='mt-5'></hr>
              </div>
              <div className="row fs-2 mt-5" style={{ marginLeft: '30px' }}>
                Design considerations for construction projects involve various aspects ranging from architectural design to structural engineering, materials selection, and environmental sustainability
              </div>
            </div>
            <div className="col-xl-8">
              <img src={require('../images/2d_model.jpg')} alt="img" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row mt-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-5 lh-base'>PHASES</h2>
          </div>
          <div className="col-xl-6">
            <h2>Estimated Time Required</h2>
            <div className="row mt-5">
              <PieChart width={800} height={600}>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data}
                  cx="50%"
                  cy="50%"
                  fontSize={"30px"}
                  outerRadius={250}
                  fill="#002366"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div className="col-xl-6">
            <table class="table table-bordered" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
              <thead>
                <tr class="table-primary" >
                  <th scope="col"></th>
                  <th scope="col">Phase Type</th>
                  <th scope="col">Percentage(%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>

                  <td>Design</td>
                  <td>125</td>
                </tr>
                <tr>
                  <th scope="row">2</th>

                  <td>Land & Foundatation</td>
                  <td>500</td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>Mechanical</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">4</th>

                  <td>Electrical</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">5</th>

                  <td>Plumbing</td>
                  <td>278</td>
                </tr>
                <tr>
                  <th scope="row">6</th>

                  <td>Waterprofing</td>
                  <td>189</td>
                </tr>
                <tr>
                  <th scope="row">7</th>

                  <td>Coloring</td>
                  <td>189</td>
                </tr>
                <tr>
                  <th scope="row">8</th>

                  <td>Finishing</td>
                  <td>189</td>

                </tr>
              </tbody>
              <tfoot>
                <td></td>
                <td></td>
                <td>100%</td>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="row mb-5">
          <div className="row mb-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-5'>PROGRESS OF PHASES</h2>
          </div>
          <div className="row">
            <table className="table table-bordered" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
              <tbody>
                <tr className="table-primary">
                  <th scope="col" />
                  <th scope="col">Phase Type</th>
                  <th>Status</th>
                  <th scope="col">Percentage(%)</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Design</td>
                  <td>Completed</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "100%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Land &amp; Foundatation</td>
                  <td>Completed</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "100%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mechanical</td>
                  <td>Ongoing</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "75%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Electrical</td>
                  <td>Ongoing</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "50%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Plumbing</td>
                  <td>Ongoing</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "20%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Waterprofing</td>
                  <td>Pending</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "20%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Coloring</td>
                  <td>Pending</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"

                      style={{ width: "5%" }}
                    />
                  </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Finishing</td>
                  <td>Pending</td>
                  <td><div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "5%" }}
                    />
                  </div>
                  </td>
                </tr>
              </tbody>

            </table>

          </div>
        </div>
        <div className="row">
          <div className="row mb-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Material Details</h2>
          </div>
          <div className="row" style={{ marginLeft: '50px' }}>
            <div className="row mb-5">
              <div className="col-xl-4">
                <div className="card shadow pt-5" style={{ width: "400px" }}>
                  <img src={require('../images/cement.jpg')} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-center fs-3 ">Cement</h5>
                    <h4 className='text-center'>INR : 6000.00</h4>
                    <hr></hr>
                    <p className="card-text  fs-4">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4"><div className="card shadow pt-5" style={{ width: "400px" }}>
                <img src={require('../images/cement.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-center fs-3">Cement</h5>
                  <h4 className='text-center '>INR : 6000.00</h4>
                  <hr></hr>
                  <p className="card-text  fs-4">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </div>
              </div></div>
              <div className="col-xl-4"><div className="card shadow pt-5" style={{ width: "400px" }}>
                <img src={require('../images/cement.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-center fs-3">Cement</h5>
                  <h4 className='text-center'>INR : 6000.00</h4>
                  <hr></hr>
                  <p className="card-text fs-4">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </div>
              </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="row mb-5">
            <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Working Team</h2>
          </div>
          <div className="row mb-5">
            <table class="table table-bordered" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
              <thead>
                <tr class="table-primary" >
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Akshada Kale</td>
                  <td>Manager</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">2</th>

                  <td>Amar Sing</td>
                  <td>Ass Manager</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>Abhijit Khote</td>
                  <td>Site Engineer</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">4</th>

                  <td>Aditya Niphade</td>
                  <td>Site Enginner</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <th scope="row">5</th>

                  <td>Ashish Raj</td>
                  <td>Architect</td>
                  <td>9876543210</td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  )
}
