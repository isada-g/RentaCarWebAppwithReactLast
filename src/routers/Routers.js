import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import CreateFormPage from "../pages/CreateFormPage";
import UpdateFormPage from "../pages/UpdateFormPage";
import CatalogList from "../pages/CatalogList";
import RentedCarPage from "../pages/RentedCarPage";
import CreateModelPage from '../pages/CreateModelPage';
import CreateBrandPage from '../pages/CreateBrandPage';
import CreateCarPage from '../pages/CreateCarPage';
import PaymentPage from '../pages/PaymentPage';

const Layout = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/CreateFormPage" element={<CreateFormPage />} />
      <Route path="/CatalogList" element={<CatalogList />} />
      <Route path="/UpdateFormPage/:id" element={<UpdateFormPage />} />
      <Route path="/RentedCarPage" element={<RentedCarPage />} />
      <Route path="/CreateModelPage" element={<CreateModelPage />} />
      <Route path="/CreateBrandPage" element={<CreateBrandPage />} />
      <Route path="/CreateCarPage" element={<CreateCarPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
    </Routes>
  );
};

export default Layout;
