import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/public/home_bg.jpg';
import image2 from '../../../assets/public/grid-image-5.jpg';
import image3 from '../../../assets/public/cardImage3.jpg';

function CarouselNew() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sign Language Lessons</h3>
          <p>Learn sign language with our comprehensive lessons designed for all skill levels.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>AI-Powered Translation</h3>
          <p>Experience our cutting-edge AI technology that translates sign language in real-time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Community and Support</h3>
          <p>Join our supportive community of learners and experts.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselNew;
