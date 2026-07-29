import React from "react";
import imageone from "./assets/showcase-2.webp";
import imagetwo from "./assets/main-2.webp";
import imagethree from "./assets/main-4.webp";

function Bookatabel() {
  return (
    <>
      <section className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-lg-5 mt-5 pt-5">
            <div className="hero-content">
              <h1 className="hero-title">
                Savor Authentic
                <br />
                Mediterranean
                <br />
                Cuisine
              </h1>

              <p className="hero-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Experience the rich flavors of traditional Mediterranean cooking
                in an elegant atmosphere.
              </p>

              <div className="hero-buttons">
                <a href="#" className="btn-primary-custom hover-up">
                  BOOK A TABLE
                </a>
                <a
                  href="#"
                  className="btn-outline-custom hover-up hover-invert"
                >
                  VIEW MENU
                </a>
              </div>

              <div className="hero-info-wrapper">
                <div className="info-item">
                  <i className="bi bi-clock info-icon"></i>
                  <div className="info-text">
                    <span className="info-label">OPEN DAILY</span>
                    <span className="info-value">11:00 AM - 10:30 PM</span>
                  </div>
                </div>

                <div className="info-item">
                  <i className="bi bi-geo-alt info-icon"></i>
                  <div className="info-text">
                    <span className="info-label">LOCATION</span>
                    <span className="info-value">
                      Downtown Culinary District
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 mt-4">
            <div className="hero-images-wrapper">
              <div className="img-container">
                <img src={imageone} alt="Hero Main" className="main-image hover-zoom" />
              </div>
              <div className="thumb-card thumb-bottom-left img-container">
                <img src={imagetwo} alt="Thumb Left" className="thumb-image hover-zoom" />
              </div>
              <div className="thumb-card thumb-top-right img-container">
                <img
                  src={imagethree}
                  alt="Thumb Right"
                  className="thumb-image hover-zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bookatabel;
