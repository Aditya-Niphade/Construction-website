import React, { useState } from 'react';

export default function DocumentAd() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected for upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('File uploaded successfully');
        // Optionally, update UI or reset form
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error occurred while uploading file:', error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <h2 className='fs-1 fw-bold shadow pt-3 mb-3 lh-base'>Documents</h2>
        </div>
        <div className="row" style={{ marginLeft: '30px', marginRight: '30px'}}>
          <table className="table table-bordered shadow pt-1 mb-5" >
            <thead className='table-primary'>
              <tr>
                <th>ID</th>
                <th>Doc Name</th>
                <th>File</th>
                <th>Upload</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>7/12</td>
                <td>
                  <input
                    type="file"
                    className="form-control"
                    id="fileUpload"
                    onChange={handleFileChange}
                  />
                </td>
                <td><button type="button" className="btn btn-outline-secondary" onClick={handleUpload}>Upload</button></td>
                <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
              </tr>
              {/* Repeat similar structure for other rows */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
