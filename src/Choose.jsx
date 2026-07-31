import React from "react";
import foimgon from "./assets/event-4.webp";
import foimgtw from "./assets/event-6.webp";
import foimgthr from "./assets/event-9.webp";

function Choose() {
  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12 text-center section-header-wrapper">
            <h2 className="section-main-title">Choose Your Perfect Package</h2>
            <p className="section-main-subtitle">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam
            </p>
          </div>
        </div>
        <div className="row pricing-cards-row align-items-center justify-content-center">
          <div className="col-md-4 mt-5">
            <div className="pricing-card side-card">
              <div className="pricing-icon-box">
                <i className="bi bi-gem"></i>
              </div>
              <h3 className="package-name">Premium Package</h3>
              <div className="package-price">
                <span className="price-amount">$129</span>
                <span className="price-unit">per person</span>
              </div>

              <ul className="package-features">
                <li>
                  <i className="bi bi-check-circle"></i> 5-course gourmet menu
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Premium wine selection
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Dedicated event
                  coordinator
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Custom table
                  arrangements
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Professional
                  photography
                </li>
              </ul>

              <div className="guests-badge">30-80 guests</div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="pricing-card featured-card">
              <div className="popular-badge">Most Popular</div>

              <div className="pricing-icon-box">
                <i className="bi bi-star"></i>
              </div>
              <h3 className="package-name">Standard Package</h3>
              <div className="package-price">
                <span className="price-amount">$89</span>
                <span className="price-unit">per person</span>
              </div>

              <ul className="package-features">
                <li>
                  <i className="bi bi-check-circle"></i> 3-course dinner menu
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Welcome cocktail hour
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Event planning
                  assistance
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Audio/visual equipment
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Complimentary parking
                </li>
              </ul>

              <div className="guests-badge">20-120 guests</div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="pricing-card side-card">
              <div className="pricing-icon-box">
                <i className="bi bi-heart"></i>
              </div>
              <h3 className="package-name">Essentials Package</h3>
              <div className="package-price">
                <span className="price-amount">$59</span>
                <span className="price-unit">per person</span>
              </div>

              <ul className="package-features">
                <li>
                  <i className="bi bi-check-circle"></i> Buffet style dinner
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> House wine &amp; beer
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Basic decorations
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Standard seating
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> 4-hour venue rental
                </li>
              </ul>

              <div className="guests-badge">15-60 guests</div>
            </div>
          </div>
        </div>
        <div className="row gallery-row">
          <div className="col-md-3 mt-4">
            <div className="gallery-card">
              <img src={foimgon} alt="Event Gallery" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-title">Corporate Events</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="gallery-card featured-gallery-card">
              <img src={foimgtw} alt="Event Gallery" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-title">Wedding Receptions</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="gallery-card">
              <img src={foimgthr} alt="Event Gallery" className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-title">Birthday Celebrations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Choose;
