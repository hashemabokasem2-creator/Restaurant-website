import React from "react";
import potoon from "./assets/person-f-5.webp";
import pototw from "./assets/person-m-5.webp";
import pototh from "./assets/person-f-6.webp";
import potofou from "./assets/person-m-6.webp";

function Testimonials() {
  return (
    <>
      <div className="fliud mt-5 mb-5">
        <section className="container">
          <div className="row custom-title-row">
            <div className="col-md-6">
              <div className="section-title">
                <h2>Testimonials</h2>
                <div className="section-divider"></div>
                <p>
                  Necessitatibus eius consequatur ex aliquid fuga eum quidem
                  sint consectetur velit
                </p>
              </div>
            </div>
          </div>
          <div className="row custom-card-row">
            <div className="col-md-5">
              <div className="testimonial-card">
                <div className="card-header-wrapper">
                  <img
                    src={potoon}
                    alt="Sophia Martinez"
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <h5 className="user-name">Sophia Martinez</h5>
                    <span className="user-title">Creative Director</span>
                    <div className="info-icon">
                      <i className="bi bi-building"></i>
                    </div>
                  </div>
                </div>
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">
                  Leveraging cutting-edge design principles to create immersive
                  brand experiences that resonate with modern audiences.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="testimonial-card testimonial-card-featured">
                <div className="card-header-wrapper">
                  <img
                    src={pototw}
                    alt="Alexander Wright"
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <h5 className="user-name">Alexander Wright</h5>
                    <span className="user-title">CEO & Founder</span>
                    <div className="info-icon">
                      <i className="bi bi-building"></i>
                    </div>
                  </div>
                </div>
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">
                  Revolutionary solutions have transformed our business
                  landscape, driving unprecedented growth and market leadership
                  position.
                </p>
              </div>
            </div>
          </div>

          <div className="row custom-card-row">
            <div className="col-md-5">
              <div className="testimonial-card">
                <div className="card-header-wrapper">
                  <img
                    src={pototh}
                    alt="Isabella Kim"
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <h5 className="user-name">Isabella Kim</h5>
                    <span className="user-title">Product Strategist</span>
                    <div className="info-icon">
                      <i className="bi bi-building-check"></i>
                    </div>
                  </div>
                </div>
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">
                  Strategic implementation of innovative technologies has
                  elevated our product development and market penetration.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="testimonial-card">
                <div className="card-header-wrapper">
                  <img
                    src={potofou}
                    alt="James Cooper"
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <h5 className="user-name">James Cooper</h5>
                    <span className="user-title">Tech Lead</span>
                    <div className="info-icon">
                      <i className="bi bi-building-gear"></i>
                    </div>
                  </div>
                </div>
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p className="testimonial-text">
                  Exceptional technical expertise and innovative solutions have
                  streamlined our development processes significantly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonials;
