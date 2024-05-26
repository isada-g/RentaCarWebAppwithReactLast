import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { car } = props.item;
  const { model, license } = car;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={model.imageUrl} alt={model.name} className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{model.name}</h4>
          <h6 className="rent__price text-center mt-">
            ${props.item.price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {license}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {model.gearType === 1 ? 'Automatic' : 'Manual'}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {model.fuelType === 1 ? 'Diesel' : 'Petrol'}
            </span>
          </div>

          <Link style={{textDecoration: "none"}} className=" w-50 car__item-btn car__btn-details" to={`/cars/${props.item.id}`}>Details</Link>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
