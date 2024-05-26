import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CreateCatalog({ inputData, handleChange }) {
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5028/api/car/list").then(data => {
            setCars(data.data)
        }).catch(err => {
            console.log(err)
        })

        return () => {

        }
    }, [])


    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={inputData.title}
                    onChange={handleChange}
                    placeholder="Enter title"
                    data-type="catalog"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={inputData.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    data-type="catalog"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={inputData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                    data-type="catalog"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="isRented">Is Rented</label>
                <select
                    type="text"
                    className="form-control"
                    id="isRented"
                    name="isRented"
                    value={inputData.isRented}
                    onChange={handleChange}
                    placeholder="Enter rented status"
                    data-type="catalog"
                >
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label for="carId">Car</label>
                <select className="form-control"
                    id="carId"
                    name="carId"
                    onChange={handleChange}
                    data-type="catalog" >
                    <option key={0} value={0}>Please select a car</option>
                    {cars.map(car => (
                        <option key={car.id} value={car.id}>{car.license}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default CreateCatalog;
