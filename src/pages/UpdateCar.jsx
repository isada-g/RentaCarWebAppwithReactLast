import React from 'react';

function UpdateCar({ inputData, handleChange }) {
    return (
        <div className='w-50 border bg-light p-5'>
            <h3>Car</h3>
            <div className="mb-3">
                <label htmlFor="license" className="form-label">License</label>
                <input
                    type="text"
                    name='license'
                    className='form-control'
                    value={inputData.license}
                    onChange={(e) => handleChange(e, 'car')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="km" className="form-label">Kilometers</label>
                <input
                    type="number"
                    name='km'
                    className='form-control'
                    value={inputData.km}
                    onChange={(e) => handleChange(e, 'car')}
                />
            </div>
        </div>
    );
}

export default UpdateCar;
