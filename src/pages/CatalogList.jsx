import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance'; // Oluşturduğumuz Axios instance'ı içe aktar
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

function CatalogList() {
    const [catalogs, setCatalogs] = useState([]);

    useEffect(() => {
        axiosInstance.get('/api/Catalog/list')
            .then(response => {
                console.log(response.data); // Gelen veriyi konsolda kontrol edin

                // LocalStorage'dan kiralanmış arabaların model adlarını al
                const rentedCarsData = JSON.parse(localStorage.getItem('rentedCars')) || [];
                const rentedCarModels = rentedCarsData.map(car => car.carModel);

                // Catalog verisini güncelle
                const updatedCatalogs = response.data.map(catalog => {
                    if (!catalog.isRented && rentedCarModels.includes(catalog.car.model.name)) {
                        return { ...catalog, isRented: true };
                    }
                    return catalog;
                });

                setCatalogs(updatedCatalogs);
            })
            .catch(error => {
                console.error('There was an error fetching the catalog data!', error);
            });
    }, []);

    const handleDelete = (id) => {
        axiosInstance.delete(`/api/Catalog/${id}`)
            .then(response => {
                setCatalogs(catalogs.filter(catalog => catalog.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the catalog item!', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className='text-center'>Catalog Information</h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Link className='btn btn-primary' to="/CreateFormPage">Create New Catalog</Link>
                <Link className='btn btn-primary' to="/CreateModelPage">Create New Model</Link>
                <Link className='btn btn-primary' to="/CreateBrandPage">Create New Brand</Link>
                <Link className='btn btn-primary' to="/CreateCarPage">Create New Car</Link>
                <Link className='btn btn-primary' to="/RentedCarPage" color="primary" >Rented Cars</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Car License</th>
                        <th>Model Name</th>
                        <th>Brand Name</th>
                        <th>Rented Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {catalogs.length > 0 ? (
                        catalogs.map((catalog, index) => (
                            <tr key={index}>
                                <td>{catalog.title}</td>
                                <td>{catalog.description}</td>
                                <td>{catalog.price}</td>
                                <td>{catalog.car ? catalog.car.license : 'N/A'}</td>
                                <td>{catalog.car && catalog.car.model ? catalog.car.model.name : 'N/A'}</td>
                                <td>{catalog.car && catalog.car.model && catalog.car.model.brand ? catalog.car.model.brand.name : 'N/A'}</td>
                                <td>{catalog.isRented ? 'Rented' : "Isn't Rented"}</td>
                                <td>
                                    <Link className='text-decoration-none btn btn-sm btn-success' to={`/UpdateFormPage/${catalog.id}`}>Update</Link>
                                    <button className='text-decoration-none btn btn-sm btn-danger' onClick={() => handleDelete(catalog.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CatalogList;
