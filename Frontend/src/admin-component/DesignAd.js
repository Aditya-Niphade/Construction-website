import React from 'react'

export default function DesignAd() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Design</h2>
        </div>
        <div className="row justify-content-center mb-5">

          <div className="col-xl-8 shadow pt-1 ">
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
            <label className="form-label fs-4 fw-bold center">
              Designs
            </label>
            <form>
              <div className="mb-3">

                <label className="form-label fs-5 ">
                  Select Layout
                </label>
                <div className="input-group mb-5">
                  <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                  >
                    <option selected="">Choose...</option>
                    <option value={1}>floor plan</option>
                    <option value={2}>3d layout</option>
                    <option value={3}>Interior</option>
                    <option value={4}>Exterior</option>
                    <option value={4}>Site Images</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fs-5">
                  Layouts
                </label>
                <br></br>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputGroupFile02" />
                  <label className="input-group-text" htmlFor="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <div className='row '>
                <label className="form-label fs-5 mt-4 fw-bold center">
                  Location
                </label>
                <br></br>
                <div >
                  <div class="col-12 mt-3">
                    <label for="inputAddress" class="form-label">Address 1</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Street" />
                  </div>
                  <div class="col-12 mt-4">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Landmark" />
                  </div>
                  <div class="col-md-12 mt-4">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="col-md-12 mt-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>Maharashtra</option>
                      <option>Uttar Pradesh</option>
                      <option>Madhya Pradesh</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                  <div class="col-md-12 mt-4">
                    <label for="inputZip" class="form-label">Pincode</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>

                </div>

              </div>

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