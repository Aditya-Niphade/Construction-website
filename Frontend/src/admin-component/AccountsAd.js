import React from 'react'

export default function AccountsAd() {
    return (
        <>
            <div className="shadow p-3 mb-5 bg-white rounded">
                <h2>
                    <b>Accounting Form</b>
                </h2>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form action="#" method="post">
                                    <div>
                                        <h4>
                                            <b>Installments of project</b>
                                        </h4>
                                    </div>
                                    <br></br>
                                    <label htmlFor="projstage" className="form-label">
                                        Project Stages
                                    </label>
                                    <div classname="input-group mb-3">
                                        <select
                                            classname="form-select"
                                            id="inputGroupSelect04"
                                            aria-label="Example select with button addon"
                                        >
                                            <option selected="">Choose...</option>
                                            <option value="{1}">Foundation</option>
                                            <option value="{2}">Plinth beam</option>
                                            <option value="{3}">Basement</option>
                                            <option value="{4}">Wall</option>
                                            <option value="{5}">Flooring</option>
                                            <option value="{6}">Roofs</option>
                                            <option value="{7}">Ceiling</option>
                                            <option value="{8}">Colouring</option>
                                        </select>
                                    </div>
                                    <br></br>
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="cost" className="form-label">
                                            Installment 
                                        </label>
                                        <input
                                            type="cost"
                                            className="form-control"
                                            id="cost"
                                            name="cost"
                                            required=""
                                        />
                                    </div>
                                    
                                    
                                    <br></br>
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                    <label htmlFor="projstage" className="form-label">
                                        Billing Status
                                    </label>
                                    <div classname="input-group mb-3">
                                        <select
                                            classname="form-select"
                                            id="inputGroupSelect04"
                                            aria-label="Example select with button addon"
                                        >
                                            <option selected="">Choose...</option>
                                            <option value="{1}">Paid</option>
                                            <option value="{2}">Unpaid</option>
                                           
                                        </select>
                                    </div>
                                    </div>
                                    <br />
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="Billing" className="form-label">
                                            Bill Receipt
                                        </label>
                                        <br />
                                        <label htmlFor="pdfFile">Choose a PDF file:</label>
                                        <input type="file" name="pdfFile" id="pdfFile" accept=".pdf" required="" />
                                        <br />
                                        <br />
                                        <input type="submit" defaultValue="Upload PDF" />
                                    </div>
                                    {/* <br />
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="Billing" className="form-label">
                                            Bill Receipt
                                        </label>
                                        <br />
                                        <label htmlFor="pdfFile">Choose a PDF file:</label>
                                        <input type="file" name="pdfFile" id="pdfFile" accept=".pdf" required="" />
                                        <br />
                                        <br />
                                        <input type="submit" defaultValue="Upload PDF" />
                                    </div>
                                    <br />
                                    <div>
                                        <h4>
                                            <b>Billing</b>
                                        </h4>
                                    </div>
                                    <label htmlFor="projstage" className="form-label">
                                        Project Stages
                                    </label>
                                    <div classname="input-group mb-3">
                                        <select
                                            classname="form-select"
                                            id="inputGroupSelect04"
                                            aria-label="Example select with button addon"
                                        >
                                            <option selected="">Choose...</option>
                                            <option value="{1}">The Deposit</option>
                                            <option value="{2}">The slab or base stage</option>
                                            <option value="{3}">Frame stage</option>
                                            <option value="{4}">Lockup Stage</option>
                                            <option value="{5}">Fixing Stage</option>
                                            <option value="{6}">Practical complitaion stage</option>
                                            <option value="{7}">Goods and Service Tax (GST)</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="tcost" className="form-label">
                                            Total Cost
                                        </label>
                                        <input
                                            type="tcost"
                                            className="form-control"
                                            id="tcost"
                                            name="tcost"
                                            required=""
                                        />
                                    </div>
                                    <br />
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="Billing" className="form-label">
                                            Bill Receipt
                                        </label>
                                        <br />
                                        <label htmlFor="pdfFile">Choose a PDF file:</label>
                                        <input type="file" name="pdfFile" id="pdfFile" accept=".pdf" required="" />
                                        <br />
                                        <br />
                                        <input type="submit" defaultValue="Upload PDF" />
                                    </div>
                                    <br />
                                    <div>
                                        <h4>
                                            <b>Installment based on Progress</b>
                                        </h4>
                                    </div>
                                    <label htmlFor="progstage" className="form-label">
                                        Progress Stages
                                    </label>
                                    <div classname="input-group mb-3">
                                        <select
                                            classname="form-select"
                                            id="inputGroupSelect04"
                                            aria-label="Example select with button addon"
                                        >
                                            <option selected="">Choose...</option>
                                            <option value="{1}">Foundation</option>
                                            <option value="{2}">Plinth beam</option>
                                            <option value="{3}">Basement</option>
                                            <option value="{4}">Wall</option>
                                            <option value="{5}">Flooring</option>
                                            <option value="{6}">Roofs</option>
                                            <option value="{7}">Ceiling</option>
                                            <option value="{8}">Colouring</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="icost" className="form-label">
                                            Cost
                                        </label>
                                        <input
                                            type="icost"
                                            className="form-control"
                                            id="icost"
                                            name="icost"
                                            required=""
                                        />
                                    </div> */}
                                    <br></br>
                                    <button type="submit" className="btn btn-success me-5">
                                        Submit
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*table-start*/}
            <div className="row mb-5 mt-5">
                            <table className="table table-striped table-hover border border-solid shadow p-3">
                                <thead className='border border-secondary'>
                                    <tr >
                                        <th scope="col">bill ID</th>
                                        <th scope="col">Project Stage</th>
                                        <th scope="col">Installment</th>
                                        <th scope="col">Billing Status</th>                                       
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                            <td>111</td>
                                            <td>Plinth</td>
                                            <td>100000</td>
                                            <td>Unpaid</td>  
                                        </tr>
                                </tbody>
                                
                            </table>
                        </div>
                        {/*table-end*/}
            </div>
            
        </>
    )
}
