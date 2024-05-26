import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = ({ carPrice, carId, carModel, carLicense, onSubmit }) => {
  const [rentalDays, setRentalDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(carPrice);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    rentalDays: 1,
    totalPrice: carPrice,
    carId: carId,
    carModel: carModel,
    carLicense: carLicense
  });

  const handleDaysChange = (event) => {
    const days = event.target.value;
    setRentalDays(days);
    setTotalPrice(days * carPrice);
    setFormData({ ...formData, rentalDays: days, totalPrice: days * carPrice });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingRentals = JSON.parse(localStorage.getItem('rentedCars')) || [];
    const updatedRentals = [...existingRentals, formData];
    localStorage.setItem('rentedCars', JSON.stringify(updatedRentals)); // Form verilerini localStorage'da güncelle
    onSubmit(); // Form verilerini üst bileşene ilet
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
      </FormGroup>
      <br />
      <FormGroup>
        <label htmlFor="rentalDays">How many days would you like to rent?</label>
        <select id="rentalDays" className="form-select" value={rentalDays} onChange={handleDaysChange}>
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </FormGroup>
      <br />
      <FormGroup>
        <label>Total Price: </label>
        <p>${totalPrice}</p>
      </FormGroup>
      <br />
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">Reserve Now</button>
      </div>
    </Form>
  );
};

export default BookingForm;
