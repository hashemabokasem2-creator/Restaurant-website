import React from "react";
import imageaa from "./assets/dessert-2.webp";
import imagebb from "./assets/dessert-9.webp";
import imagecc from "./assets/dessert-7.webp";
import imagedd from "./assets/dessert-5.webp";

function DessertsSection() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <span className="card-badge">Popular</span>
                <img src={imageaa} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Chocolate Lava Cake</h3>
                  <span className="icon-badge bg-veggie">
                    <i className="bi bi-leaf"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$14</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={imagedd} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Crème Brûlée</h3>
                  <span className="icon-badge bg-check">
                    <i className="bi bi-check-circle"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={imagecc} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Tiramisu</h3>
                  <span className="icon-badge bg-veggie">
                    <i className="bi bi-leaf"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$13</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={imagebb} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Seasonal Fruit Tart</h3>
                  <span className="icon-badge bg-veggie">
                    <i className="bi bi-flower1"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$11</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DessertsSection;
