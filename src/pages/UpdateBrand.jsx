import React from 'react';

function UpdateBrand({ inputData, handleChange }) {
    return (
        <div className='w-50 border bg-light p-5'>
            <h3>Brand</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    name='name'
                    className='form-control'
                    value={inputData.name}
                    onChange={(e) => handleChange(e, 'brand')}
                />
            </div>
        </div>
    );
}

export default UpdateBrand;
