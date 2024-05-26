import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Helmet from "../components/Helmet/Helmet";
import '../styles/PaymentPage.css';

const PaymentPage = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada ödeme işlemi yapılacak
        alert('Payment Successful!');
        // Ödeme işlemi tamamlandıktan sonra yapılacak işlemler
    };

    return (
        <Helmet title="Payment">
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <div className="payment__form mt-5">
                                <h3 className="mb-4">Payment Information</h3>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="name">Name on Card</Label>
                                        <Input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            placeholder="Enter name on card" 
                                            value={paymentDetails.name} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cardNumber">Card Number</Label>
                                        <Input 
                                            type="text" 
                                            name="cardNumber" 
                                            id="cardNumber" 
                                            placeholder="Enter card number" 
                                            value={paymentDetails.cardNumber} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="expiryDate">Expiry Date</Label>
                                        <Input 
                                            type="text" 
                                            name="expiryDate" 
                                            id="expiryDate" 
                                            placeholder="MM/YY" 
                                            value={paymentDetails.expiryDate} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cvv">CVV</Label>
                                        <Input 
                                            type="text" 
                                            name="cvv" 
                                            id="cvv" 
                                            placeholder="Enter CVV" 
                                            value={paymentDetails.cvv} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </FormGroup>
                                    <Button type="submit" className="btn payment__btn mt-3">Pay Now</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default PaymentPage;
