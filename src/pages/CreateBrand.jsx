import React from 'react';

function CreateBrand({ inputData, handleChange }) {
    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={inputData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    data-type="brand"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="name">Image Url</label>
                <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={inputData.imageUrl}
                    onChange={handleChange}
                    placeholder="Enter image url"
                    data-type="brand"
                />
            </div>
        </div>
    );
}

export default CreateBrand;
