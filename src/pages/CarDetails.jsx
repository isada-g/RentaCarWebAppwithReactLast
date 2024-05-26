import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useNavigate, useParams } from "react-router-dom"; // useNavigate'i import edin
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import axiosInstance from './axiosInstance';
import { AuthContext } from '../context/AuthContext';
import '../styles/CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // useNavigate'i kullanın
  const { user } = useContext(AuthContext);  // AuthContext'ten kullanıcı bilgilerini alıyoruz
  const [carDetails, setCarDetails] = useState(null);
  const [comment, setComment] = useState({ content: "", catalogId: id });
  const [comments, setComments] = useState([]); // Yorumları saklamak için state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catalogResponse = await axiosInstance.get(`/api/Catalog/${id}`);
        const catalogData = catalogResponse.data;

        const carResponse = await axiosInstance.get(`/api/Car/${catalogData.carId}`);
        const carData = carResponse.data;

        const modelResponse = await axiosInstance.get(`/api/Model/${carData.modelId}`);
        const modelData = modelResponse.data;

        const brandResponse = await axiosInstance.get(`/api/Brand/${modelData.brandId}`);
        const brandData = brandResponse.data;

        setCarDetails({
          imageUrl: modelData.imageUrl,
          model: modelData.name,
          price: catalogData.price,
          description: catalogData.description,
          modelYear: modelData.releaseDate,
          brand: brandData.name,
          catalogId: catalogData.id,
          carLicense: carData.license // Aracın lisans bilgisi
        });

        setComment((prevComment) => ({
          ...prevComment,
          catalogId: catalogData.id,
        }));

        // Yorumları fetch et ve catalogId ile filtrele
        const commentsResponse = await axiosInstance.get(`/api/Comment/list`);
        const allComments = commentsResponse.data;
        const filteredComments = allComments.filter(c => c.catalogId === catalogData.id);
        setComments(filteredComments);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carDetails]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleBookingSubmit = () => {
    navigate('/PaymentPage'); // CarListing sayfasına yönlendir
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to post a comment");
      return;
    }

    try {
      await axiosInstance.post('/api/Comment/add', { ...comment, email: user.email });
      alert('Comment successfully sent!');
      // Yorumları yeniden fetch et ve catalogId ile filtrele
      const commentsResponse = await axiosInstance.get(`/api/Comment/list`);
      const allComments = commentsResponse.data;
      const filteredComments = allComments.filter(c => c.catalogId === comment.catalogId);
      setComments(filteredComments);
    } catch (error) {
      console.error("Yorum gönderilirken hata oluştu:", error);
      alert('Yorum gönderilirken bir hata oluştu.');
    }
  };

  if (!carDetails) return <div>Loading...</div>;

  return (
    <Helmet title={carDetails.model}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={carDetails.imageUrl} alt={carDetails.model} className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{carDetails.model}</h2>
                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${carDetails.price}.00 / Day
                  </h6>
                </div>
                <p className="section__description">{carDetails.description}</p>
                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i> {carDetails.modelYear}
                  </span>
                </div>
                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i> {carDetails.brand}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm carPrice={carDetails.price} carId={carDetails.catalogId} carModel={carDetails.model} carLicense={carDetails.carLicense} onSubmit={handleBookingSubmit} />
              </div>
            </Col>
            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="comments-section mt-5">
                <h4>Comments</h4>
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="comment">
                      <p className="comment-email">{comment.email}</p>
                      <p className="comment-time">{new Date(comment.createdDate).toLocaleString()}</p>
                      <p className="comment-content">{comment.content}</p>
                    </div>
                  ))
                ) : (
                  <p className="section__description">No comments yet. Be the first to comment!</p>
                )}
              </div>
              <div className="leave__comment-form mt-5">
                <h4>Leave a Comment</h4>
                <p className="section__description">
                  You must sign-in to make or comment a post
                </p>
                <Form onSubmit={handleCommentSubmit}>
                  <FormGroup className="d-flex gap-3">
                    <Input type="text" name="content" placeholder="Comment..." value={comment.content} onChange={handleCommentChange} />
                  </FormGroup>
                  <button className="btn comment__btn mt-3" type="submit">Post a Comment</button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
