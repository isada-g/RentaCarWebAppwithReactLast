import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              Welcome to our rent a car site, your trusted partner in car rentals. With a commitment to excellence and a passion for customer satisfaction, we have been serving our valued clients for over a decade. Our diverse fleet of vehicles, ranging from compact cars to luxury sedans and spacious SUVs, ensures that we have the perfect car for every occasion. Whether you're planning a weekend getaway, a business trip, or need a reliable vehicle for daily use, we provide top-notch service with competitive pricing. Our team of dedicated professionals is here to assist you every step of the way, ensuring a seamless and enjoyable rental experience. Choose us for your next journey and discover why we are the preferred choice for car rentals in the region. Thank you for choosing us where your journey begins.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> We offer a diverse range of cars to suit every need and budget.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Our dedicated team is always ready to assist you with personalized support.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>  Enjoy top-quality vehicles at affordable rates with no hidden fees.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Our user-friendly platform makes renting a car quick and easy.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
