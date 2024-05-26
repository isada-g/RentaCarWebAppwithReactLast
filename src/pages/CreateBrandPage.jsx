import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import CreateCatalog from './CreateCatalog';
import CreateCar from './CreateCar';
import CreateModel from './CreateModel';
import CreateBrand from './CreateBrand';
import axios from 'axios';

function CreateBrandPage() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        model: {
            name: '',
            imageUrl: '',
            fuelType: 0,
            gearType: 0
        },
        brand: {
            name: '',
            imageUrl: ''
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: inputData.brand.name,
            imageUrl: inputData.brand.imageUrl
        }
        axios.post("http://localhost:5028/api/brand/add", data).then(data => {
            const newData = {...inputData}
            newData.brand.name = ""
            newData.brand.imageUrl = ""
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
                    <h4>Create Brand</h4>
                    <CreateBrand inputData={inputData.brand} handleChange={handleChange} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Create Brand</button>
                </div>
            </form>
        </div>
    );
}

export default CreateBrandPage;
