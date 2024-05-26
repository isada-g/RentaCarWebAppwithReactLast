import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import UpdateCatalog from './UpdateCatalog';
import UpdateCar from './UpdateCar';
import UpdateModel from './UpdateModel';
import UpdateBrand from './UpdateBrand';
import UpdateComment from './UpdateComment';

function UpdateFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        catalog: { id: '', title: '', description: '', price: '', IsRented: true , carId: 0},
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const catalogResponse = await axios.get(`http://localhost:5028/api/Catalog/${id}`);
                console.log(catalogResponse.data)
                setInputData({
                    catalog: catalogResponse.data,
                });                

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e, section) => {
        setInputData({
            ...inputData,
            [section]: {
                ...inputData[section],
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(inputData.catalog)
            await axios.put(`http://localhost:5028/api/Catalog/${inputData.catalog.id}`, inputData.catalog, { headers: { 'Content-Type': 'application/json' } });
            console.log("Catalog updated successfully");
            navigate('/admin');
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Update Records</h2>
            <form onSubmit={handleSubmit}>
                <UpdateCatalog inputData={inputData.catalog} handleChange={handleChange} />
                <button type="submit" className="btn btn-primary">Update All</button>
            </form>
        </div>
    );
}

export default UpdateFormPage;
