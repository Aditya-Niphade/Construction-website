import React from 'react'

export default function ProgressAd() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Progress</h2>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-8 shadow pt-1 ">
            <form>
              <div className="mb-3">
                <label className="form-label fs-4 fw-bold">
                  Details of Site
                </label>
                <br></br>
                <label className="form-label">
                  Name Of Construction
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameOfConstruction"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Name Of Owner
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameOfOwner"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Address of Site
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameOfOwner"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Construction Started On
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameOfOwner"
                />
              </div>
              <br></br>
              <label className="form-label fs-4 fw-bold">
                Ongoing Phase
              </label>
              <br></br>
              <label className="form-label">
                Current Phase
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>Design</option>
                  <option value={2}>Land & Foundation</option>
                  <option value={3}>Mechanical</option>
                  <option value={4}>Electrical</option>
                  <option value={5}>Plumbing</option>
                  <option value={6}>Waterprofing</option>
                  <option value={7}>Coloring</option>
                  <option value={8}>Finishing</option>
                </select>
              </div>
              <br></br>
              <label className="form-label ">
                Design of Current Phase
              </label>
              <br></br>
              <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" htmlFor="inputGroupFile02">
                  Upload
                </label>
              </div>
              <br></br>
              <label className="form-label fs-4 fw-bold">
                Progress of Phase
              </label>
              <br></br>
              <br></br>
              <label className="form-label">
                Select Phase
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>Design</option>
                  <option value={2}>Land & Foundation</option>
                  <option value={3}>Mechanical</option>
                  <option value={4}>Electrical</option>
                  <option value={5}>Plumbing</option>
                  <option value={6}>Waterprofing</option>
                  <option value={7}>Coloring</option>
                  <option value={8}>Finishing</option>
                </select>
              </div>
              <br></br>
              <br></br>
              <label className="form-label">
                Select Percentage of Completion
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>20%</option>
                  <option value={2}>40%</option>
                  <option value={3}>50%</option>
                  <option value={4}>60%</option>
                  <option value={5}>80%</option>
                  <option value={6}>100%</option>
                </select>
              </div>
              <br></br>
              <label className="form-label fs-4 fw-bold">
                Material Price
              </label>
              <br></br>
              <label className="form-label">
                Select type of Material
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>Rebar</option>
                  <option value={2}>Cement</option>
                  <option value={3}>Brick</option>
                  <option value={4}>Wood</option>
                  <option value={5}>Steel</option>
                  <option value={6}>Tiles</option>
                  <option value={7}>Aggregates</option>
                  <option value={8}>Glass</option>
                  <option value={9}>Sand</option>
                </select>
              </div>
              <br></br>
              <label className="form-label">
                Enter Price of Material
              </label>
              <input
                type="number"
                className="form-control"
                id="priceofmaterial"
              />
              <br></br>
              <label className="form-label">
                Enter Quantity of Material
              </label>
              <input
                type="number"
                className="form-control"
                id="priceofmaterial"
              />
              <button type="submit" className="btn btn-success mt-3 mb-5 me-5">
                Add
              </button>
              <br></br>
              <br></br>
              <label className="form-label fs-4 fw-bold">
                Working Team
              </label>
              <br></br>
              <br></br>
              <label className="form-label">
                Select position
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>Manager</option>
                  <option value={2}>Ass-Manager</option>
                  <option value={3}>Site Engineer</option>
                  <option value={4}>Architect</option>
                </select>
              </div>
              <br></br>
              <br></br>
              <label className="form-label">
                Select Employee
              </label>
              <br></br>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected="">Choose...</option>
                  <option value={1}>Abhijit</option>
                  <option value={2}>Akshada</option>
                  <option value={3}>Aditya</option>
                  <option value={4}>Amar</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success mt-3 mb-5 me-5">
                Add
              </button>
              <br></br>
              <br></br>

              <button type="submit" className="btn btn-success mt-3 mb-5 me-5">
                Submit
              </button>
              <button type="submit" className="btn btn-primary mt-3 mb-5">
                Update
              </button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}
