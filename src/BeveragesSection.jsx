import React from "react";
import fimgon from "./assets/drink-3.webp";
import fimgtw from "./assets/drink-6.webp";
import fimgtr from "./assets/drink-8.webp";
import fimgfu from "./assets/drink-10.webp";

function BeveragesSection() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <span className="card-badge">House Special</span>
                <img src={fimgon} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Signature Cocktail</h3>
                  <span className="icon-badge bg-spicy">
                    <i className="bi bi-fire"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$16</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={fimgtw} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Fresh Fruit Smoothie</h3>
                  <span className="icon-badge bg-veggie">
                    <i className="bi bi-flower1"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={fimgtr} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Premium Wine Selection</h3>
                  <span className="icon-badge bg-star">
                    <i className="bi bi-star-fill"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$35</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="menu-card">
              <div className="card-image-wrapper img-container">
                <img src={fimgfu} alt="صورة" className="card-img hover-zoom" />
              </div>

              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="card-title">Artisan Coffee</h3>
                  <span className="icon-badge bg-veggie">
                    <i className="bi bi-flower1"></i>
                  </span>
                </div>

                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore
                </p>

                <div className="card-footer-row">
                  <span className="card-price">$6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeveragesSection;
