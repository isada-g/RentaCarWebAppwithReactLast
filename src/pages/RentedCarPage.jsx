import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function RentedCarPage() {
    const [rentedCars, setRentedCars] = useState([]);

    useEffect(() => {
        const rentedCarsData = JSON.parse(localStorage.getItem('rentedCars')) || [];
        setRentedCars(rentedCarsData);
        localStorage.setItem('rentedCars', JSON.stringify(rentedCarsData)); // Veriyi localStorage'a kaydet
    }, []);

    const handleReset = () => {
        localStorage.removeItem('rentedCars');
        setRentedCars([]);
    };

    return (
        <div className="container mt-5">
            <h2 className='text-center'>Rented Car Information</h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Link className='btn btn-primary' to="/admin" color="primary">Go to Catalog Page</Link>
                <button className='btn btn-danger' onClick={handleReset}>Delete Rent Information</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Rental Days</th>
                        <th>Total Price</th>
                        <th>Car Model</th>
                        <th>Car License</th>
                    </tr>
                </thead>
                <tbody>
                    {rentedCars.length > 0 ? (
                        rentedCars.map((car, index) => (
                            <tr key={index}>
                                <td>{car.firstName}</td>
                                <td>{car.lastName}</td>
                                <td>{car.phoneNumber}</td>
                                <td>{car.rentalDays}</td>
                                <td>${car.totalPrice}</td>
                                <td>{car.carModel}</td>
                                <td>{car.carLicense}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default RentedCarPage;
