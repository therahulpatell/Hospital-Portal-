import React from "react";

export default function UploadImg() {
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-8'>
            <label className='btn btn-default p-0'>
              <input type='file' accept='image/*' />
            </label>
          </div>

          <div className='col-4'>
            <button className='btn btn-success btn-sm'>Upload</button>
          </div>
        </div>

        <div className='card mt-3'>
          <div className='card-header'>List of Files</div>
          <ul className='list-group list-group-flush'></ul>
        </div>
      </div>
    </div>
  );
}
