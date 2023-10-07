import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Gallery.css'; 
import certi1 from '../img/certi1.jpg';
import cert2 from '../img/cert2.jpg';
export default function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    if (index < 2) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <div className="container-fluid product py-5 my-5">
        <div className="container py-5">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="section-title fs-5 fw-medium fst-italic text-prim">Certificates</p>
            <h1 className="display-6">
              Vaastu Shastra is associated with attracting positive energies
            </h1>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={certi1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cert2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={certi1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
