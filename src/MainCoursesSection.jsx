import React from "react";
import imgoe from "./assets/main-2.webp";
import imgte from "./assets/main-4.webp";
import imgre from "./assets/main-6.webp";
import imgfw from "./assets/main-8.webp";

function MainCoursesSection() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <span className="card-badge">Signature</span>
                <img src={imgoe} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Grilled Ribeye Steak</h3>
                  <span className="icon-badge bg-star">
                    <i className="bi bi-star-fill"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$45</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={imgte} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Pan-Seared Salmon</h3>
                  <span className="icon-badge bg-check">
                    <i className="bi bi-check-circle"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$38</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={imgre} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Lobster Ravioli</h3>
                  <span className="icon-badge bg-star">
                    <i className="bi bi-star-fill"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$42</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={imgfw} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Mushroom Risotto</h3>
                   <span className="icon-badge bg-veggie">
                  <i className="bi bi-leaf"></i>
                </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$32</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCoursesSection;
