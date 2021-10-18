import React from 'react';
import { Carousel } from 'react-bootstrap';
import health1 from '../../../images/banner/health1.jpg';
import health2 from '../../../images/banner/health2.jpg';
import health4 from '../../../images/banner/health4.jpg';
import './Banner.css'

const Banner = () => {
    return (
    <div>
 <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={health1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We care Our Every Patients</h3>
      <p>Health Care is committed to providing clear, accurate <br /> and honest information about the quality of care we offer to all of our patients.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={health2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>We care Our Every Patients</h3>
      <p>Health Care is committed to providing clear, accurate <br /> and honest information about the quality of care we offer to all of our patients.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={health4}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>We care Our Every Patients</h3>
      <p>Health Care is committed to providing clear, accurate <br /> and honest information about the quality of care we offer to all of our patients.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Banner;