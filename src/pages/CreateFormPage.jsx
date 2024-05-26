import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import CreateCatalog from './CreateCatalog';
import CreateCar from './CreateCar';
import CreateModel from './CreateModel';
import CreateBrand from './CreateBrand';
import axios from 'axios';

function CreateFormPage() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        catalog: {
            title: '',
            description: '',
            price: 0,
            isRented: false,
            carId: 0
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            title: inputData.catalog.title,
            description: inputData.catalog.description,
            price: inputData.catalog.price,
            carId: inputData.catalog.carId,
            isRented: inputData.catalog.isRented
        }
        axios.post("http://localhost:5028/api/catalog/add", data).then(data => {
            const newData = { ...inputData }
            newData.catalog.title = ""
            newData.catalog.description = ""
            newData.catalog.price = 0
            newData.catalog.isRented = false
            newData.catalog.carId = 0
            setInputData(newData)

        }).catch(err => console.log(err))

    };

    const handleChange = (e) => {
        const { name, value, dataset } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [dataset.type]: {
                ...prevState[dataset.type],
                [name]: value
            }
        }));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Create Forms</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <h4>Create Catalog</h4>
                    <CreateCatalog inputData={inputData.catalog} handleChange={handleChange} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Create Catalog</button>
                </div>
            </form>
        </div>
    );
}

export default CreateFormPage;
