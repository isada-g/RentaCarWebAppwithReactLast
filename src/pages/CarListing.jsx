import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from 'react-router-dom';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import axiosInstance from './axiosInstance';

const CarListing = () => {
  const [cars, setCars] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const modelQuery = searchParams.get('model');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axiosInstance.get('/api/Catalog/list');
        console.log('API Response:', response.data); // Veriyi konsolda görüntüleyin
        
        const rentedCarsData = JSON.parse(localStorage.getItem('rentedCars')) || [];
        const rentedCarModels = rentedCarsData.map(car => car.carModel);

        const availableCars = response.data.filter(catalog => catalog.isRented === false && !rentedCarModels.includes(catalog.car.model.name)); // isRented === false ve kiralanmamış arabaları filtrele
        console.log('Available Cars:', availableCars); // Filtrelenmiş veriyi görüntüleyin
        setCars(availableCars);
        setFilteredCars(availableCars);  // İlk başta tüm arabaları göster
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    let filtered = cars;
    if (modelQuery) {
      filtered = cars.filter(catalog =>
        catalog.car.model.name.toLowerCase().includes(modelQuery.toLowerCase())
      );
    }
    setFilteredCars(filtered);
  }, [modelQuery, cars]);

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sortedCars = [...filteredCars];
    if (order === 'low') {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (order === 'high') {
      sortedCars.sort((a, b) => b.price - a.price);
    }
    setFilteredCars(sortedCars);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>
                <select onChange={handleSort} value={sortOrder}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
            {filteredCars.map((catalog) => (
              <CarItem item={catalog} key={catalog.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
