import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const [fromBranch, setFromBranch] = useState('');
  const [journeyDate, setJourneyDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fromBranch && journeyDate) {
      navigate("/cars");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
        <div>
      <select
        value={fromBranch}
        onChange={(e) => setFromBranch(e.target.value)}
        required
      >
        <option value="" disabled>
          Select Branch
        </option>
        <option value="Istanbul">Istanbul,Ataköy</option>
        <option value="Ataköy" disabled>Other Branch at Your Service Very Soon</option>
      </select>
    </div>
  
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            placeholder="Journey date"
            required
            value={journeyDate}
            onChange={(e) => setJourneyDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;

