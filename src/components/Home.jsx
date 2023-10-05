import React from 'react';
import './Home.css';
import img1 from '../img/carousel-1.jpg';

function Home() {
  return (
    <div className="container-fluid px-0 mb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={img1} alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-center">
                    <p className="fs-4 text-white animate__animated animate__bounceIn font-weight-bold">Welcome to <strong className="text-dark">Viswakarma Vastu</strong></p>
                    <h1 className="display-1 text-dark mb-4 animate__animated animate__fadeInUp font-weight-bold">Pathway to a Harmonious & Prosperous Life</h1>
                    <a href="" className="btn btn-light rounded-pill py-3 px-5 animate__animated animate__zoomIn font-weight-bold">Explore More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
