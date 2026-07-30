import React from "react";
import imgon from "./assets/starter-6.webp";
import imgtw from "./assets/starter-3.webp";
import imgth from "./assets/starter-5.webp";
import imgfo from "./assets/starter-7.webp";

function StartersSection() {
  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-5">
          <div className="menu-card">
            <div className="card-image-wrapper img-container">
              <span className="card-badge">CHEF'S PICK</span>
              <img src={imgon} alt="صورة" className="card-img hover-zoom" />
            </div>

            <div className="card-content">
              <div className="card-header-row">
                <h3 className="card-title">Crispy Calamari Rings</h3>
                <span className="icon-badge bg-spicy">
                  <i className="bi bi-fire"></i>
                </span>
              </div>

              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore
              </p>

              <div className="card-footer-row">
                <span className="card-price">$18</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="menu-card">
            <div className="card-image-wrapper img-container">
              <img src={imgtw} alt="صورة" className="card-img hover-zoom" />
            </div>

            <div className="card-content">
              <div className="card-header-row">
                <h3 className="card-title">Truffle Arancini</h3>
                <span className="icon-badge bg-veggie">
                  <i className="bi bi-leaf"></i>
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
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="menu-card">
            <div className="card-image-wrapper img-container">
              <img src={imgth} alt="صورة" className="card-img hover-zoom" />
            </div>

            <div className="card-content">
              <div className="card-header-row">
                <h3 className="card-title">Salmon Ceviche</h3>
                <span className="icon-badge bg-check">
                  <i className="bi bi-check-circle"></i>
                </span>
              </div>

              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore
              </p>

              <div className="card-footer-row">
                <span className="card-price">$22</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="menu-card">
            <div className="card-image-wrapper img-container">
              <img src={imgfo} alt="صورة" className="card-img hover-zoom" />
            </div>

            <div className="card-content">
              <div className="card-header-row">
                <h3 className="card-title">Beef Tartare</h3>
                <span className="icon-badge bg-star">
                  <i className="bi bi-star-fill"></i>
                </span>
              </div>

              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore
              </p>

              <div className="card-footer-row">
                <span className="card-price">$28</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartersSection;
