import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import CreateCatalog from './CreateCatalog';
import CreateCar from './CreateCar';
import CreateModel from './CreateModel';
import CreateBrand from './CreateBrand';
import axios from 'axios';

function CreateModelPage() {
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
            brandId: 0
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const model = {
            name: inputData.model.name,
            imageUrl: inputData.model.imageUrl,
            fuelType: inputData.model.fuelType,
            gearType: inputData.model.gearType,
            brandId: inputData.brand.brandId
        }
        console.log(model)
        axios.post("http://localhost:5028/api/model/add", model).then(data => console.log(data.data)).catch(err => console.log(err))
        // try {
        //     // Model (Model) oluşturma
        //     const modelData = { ...inputData.model, brandId: brandId };
        //     const modelResponse = await axiosInstance.post('/api/Model/add', modelData);
        //     const modelId = modelResponse.data.id;


        //     alert("Veriler başarıyla kaydedildi!");
        //     navigate('/');
        // } catch (error) {
        //     console.error('Veri kaydedilirken hata oluştu:', error.response ? error.response.data : error.message);
        //     alert("Veri kaydedilirken hata oluştu. Lütfen tekrar deneyin.");
        // }
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
                    <h4>Create Model</h4>
                    <CreateModel inputData={inputData.model} handleChange={handleChange} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Create Model</button>
                </div>
            </form>
        </div>
    );
}

export default CreateModelPage;
