import React from 'react'
import { Link } from 'react-router-dom'

export default function First() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="row mb-5">
                        <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Projects</h2>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-xl-2 offset-xl-8">
                        <Link to="/addproject">
                            <button type="button" className="btn btn-outline-primary">Add Project</button>
                        </Link>
                    </div>
                </div>
                <div className="col-xl-12 justify-content-center mb-5">
                    <table className="table table-bordered" style={{ fontSize: '20px', margin: 'auto', textAlign: 'center' }}>
                        <tbody>
                            <tr className="table-primary">
                                <th scope="col">Project ID</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Project Satus</th>
                                <th scope="col">Update</th>
                                <th scope="col" style={{ width: 150 }}>Current Phase</th>
                                <th scope="col">Progress</th>
                            </tr>
                        </tbody>
                        <tbody>

                            <tr>
                                <th scope="row">1</th>
                                <td>SaiNiwas</td>
                                <td>Completed</td>

                                <td><div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Update
                                    </a>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><Link class="dropdown-item" to="/progress-ad">Progress</Link></li>
                                        <li><Link class="dropdown-item" to="/design-ad">Design</Link></li>
                                        <li><Link class="dropdown-item" to="/accounts-ad">Accounts</Link></li>
                                        <li><Link class="dropdown-item" to="/document-ad">Documents</Link></li>
                                    </ul>
                                </div>
                                </td>
                                <td>
                                    <div className="input-group">
                                    <td>Current Phase</td>
                                    </div>

                                </td>
                                <td><div className="progress">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated"
                                        role="progressbar"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>
        </>
    )
}
