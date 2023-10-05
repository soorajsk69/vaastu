import React from 'react';
import './About.css';
import yoga from '../img/yoga.jfif';
import astro from '../img/astro.jpg';

function AboutUs() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid bg-white w-100 mb-3 wow fadeIn"
                  data-wow-delay="0.1s"
                  src="https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-50 wow fadeIn"
                  data-wow-delay="0.2s"
                  src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid bg-white w-50 mb-3 wow fadeIn"
                  data-wow-delay="0.3s"
                  src="https://images.pexels.com/photos/3838629/pexels-photo-3838629.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-100 wow fadeIn"
                  data-wow-delay="0.4s"
                  src="https://images.pexels.com/photos/5272995/pexels-photo-5272995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-prim">About Us</p>
              <h1 className="display-6">The success history of Viswakarma Vastu</h1>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100 img-hover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H-YOUPG7cgmWqmdeqs0sJ416cT6EzccZ-A&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <h5>Harnessing Positive Energies for Prosperity.</h5>
                <p className="mb-0">
                  Viswakarma Vastu is a dedicated team of experts in vaastu concept services. With a proven track record of success.
                </p>
              </div>
            </div>
            <div className="border-top mb-4"></div>
            <div className="row g-3">
              <div className="col-sm-8">
                <h5>Embracing Harmony and Abundance</h5>
                <p className="mb-0">
                  Viswakarma Vastu, a leading team specializing in vaastu concept services, has a remarkable journey of creating balanced living and working spaces.
                </p>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100 img-hover"
                  src={astro}
                  alt=""
                />
              </div>
            </div>
            <div className="border-top mb-4"></div>

            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100 img-hover"
                  src={yoga}
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <h5>Harnessing Positive Energies for Prosperity.</h5>
                <p className="mb-0">
                  Viswakarma Vastu is a dedicated team of experts in vaastu concept services. With a proven track record of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
