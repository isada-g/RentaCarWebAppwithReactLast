import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UpdateCatalog({ inputData, handleChange }) {
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5028/api/Car/list").then(data => {
            setCars(data.data)
        }).catch(error => {
            console.log(error);
        })
        return () => {
        }
    }, [])


    return (
        <div className='w-50 border bg-light p-5'>
            <h3>Catalog</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    name='title'
                    className='form-control'
                    value={inputData.title}
                    onChange={(e) => handleChange(e, 'catalog')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    name='description'
                    className='form-control'
                    value={inputData.description}
                    onChange={(e) => handleChange(e, 'catalog')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                    type="number"
                    name='price'
                    className='form-control'
                    value={inputData.price}
                    onChange={(e) => handleChange(e, 'catalog')}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="isRented" className="form-label">Isrented</label>
                <select
                    type="text"
                    name='isRented'
                    className='form-control'
                    value={inputData.isRented}
                    onChange={(e) => handleChange(e, 'catalog')}
                >
                    <option selected={inputData.isRented === true && true} value={true}>True</option>
                    <option selected={inputData.isRented === false && true} value={false}>False</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label for="carId">Car</label>
                <select className="form-control"
                    id="carId"
                    name="carId"
                    onChange={(e) => handleChange(e, 'catalog')}
                    data-type="catalog" >
                    <option key={0} value={0}>Please select a car</option>
                    {cars.map(car => (
                        <option selected={car.id === inputData.carId && true} key={car.id} value={car.id}>{car.license}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default UpdateCatalog;
