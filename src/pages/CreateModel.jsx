import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

function CreateModel({ inputData, handleChange }) {
    const [brands, setbrands] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5028/api/Brand/list").then(data => {
            setbrands(data.data)
        }).catch(error => {
            console.log(error);
        })

        return () => {
        }
    }, [])


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
                    data-type="model"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={inputData.imageUrl}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    data-type="model"
                />
            </div>
            <div className="form-group mb-3">
                <label for="exampleFormControlSelect1">Fuel Type</label>
                <select className="form-control" id="fuelType"
                    name="fuelType"
                    value={inputData.fuelType}
                    onChange={handleChange}
                    data-type="model" >
                    <option value={0}>Petrol</option>
                    <option value={1}>Diesel</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="gearType">Gear Type</label>
                <select
                    type="text"
                    className="form-control"
                    id="gearType"
                    name="gearType"
                    value={inputData.gearType}
                    onChange={handleChange}
                    placeholder="Enter gear type"
                    data-type="model"
                >
                    <option value={0}>Manuel</option>
                    <option value={1}>Automatic</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label for="brand">Brand</label>
                <select className="form-control"
                    id="brandId"
                    name="brandId"
                    onChange={handleChange}
                    data-type="brand" >
                    <option key={0} value={0}>Please select a brand</option>
                    {brands.map(brand => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))}
                </select>
            </div>
        </div >
    );
}

export default CreateModel;
