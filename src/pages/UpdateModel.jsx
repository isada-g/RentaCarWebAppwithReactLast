import React from 'react';

function UpdateModel({ inputData, handleChange }) {
    return (
        <div className='w-50 border bg-light p-5'>
            <h3>Model</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    name='name'
                    className='form-control'
                    value={inputData.name}
                    onChange={(e) => handleChange(e, 'model')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">Image URL</label>
                <input
                    type="text"
                    name='imageUrl'
                    className='form-control'
                    value={inputData.imageUrl}
                    onChange={(e) => handleChange(e, 'model')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="fuelType" className="form-label">Fuel Type</label>
                <input
                    type="text"
                    name='fuelType'
                    className='form-control'
                    value={inputData.fuelType}
                    onChange={(e) => handleChange(e, 'model')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="gearType" className="form-label">Gear Type</label>
                <input
                    type="text"
                    name='gearType'
                    className='form-control'
                    value={inputData.gearType}
                    onChange={(e) => handleChange(e, 'model')}
                />
            </div>
        </div>
    );
}

export default UpdateModel;
