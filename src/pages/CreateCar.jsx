import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CreateCar({ inputData, handleChange }) {
    const [models, setModels] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5028/api/Model/list").then(data => {
            setModels(data.data)
        }).catch(error => {
            console.log(error);
        })

        return () => {
        }
    }, [])


    return (
        <div>
            <div className="form-group mb-3">
                <label htmlFor="license">License</label>
                <input
                    type="text"
                    className="form-control"
                    id="license"
                    name="license"
                    value={inputData.license}
                    onChange={handleChange}
                    placeholder="Enter license"
                    data-type="car"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="km">Kilometers</label>
                <input
                    type="number"
                    className="form-control"
                    id="km"
                    name="km"
                    value={inputData.km}
                    onChange={handleChange}
                    placeholder="Enter kilometers"
                    data-type="car"
                />
            </div>
            <div className="form-group mb-3">
                <label for="modelId">Model</label>
                <select className="form-control"
                    id="modelId"
                    name="modelId"
                    onChange={handleChange}
                    data-type="car" >
                    <option key={0} value={0}>Please select a model</option>
                    {models.map(model => (
                        <option key={model.id} value={model.id}>{model.name}</option>
                    ))}
                </select>
            </div>

        </div>
    );
}

export default CreateCar;
