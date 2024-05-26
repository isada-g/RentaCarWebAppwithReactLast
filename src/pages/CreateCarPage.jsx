import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import CreateCatalog from './CreateCatalog';
import CreateCar from './CreateCar';
import CreateModel from './CreateModel';
import CreateBrand from './CreateBrand';
import axios from 'axios';

function CreateCarPage() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        car: {
            km: '',
            modelId: 0,
            license: ''
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            license: inputData.car.license,
            km: inputData.car.km,
            modelId: inputData.car.modelId
        }
        axios.post("http://localhost:5028/api/car/add", data).then(data => {
            const newData = { ...inputData }
            newData.car.km = ""
            newData.car.license = ""
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
                    <h4>Create Car</h4>
                    <CreateCar inputData={inputData.car} handleChange={handleChange} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Create Car</button>
                </div>
            </form>
        </div>
    );
}

export default CreateCarPage;
