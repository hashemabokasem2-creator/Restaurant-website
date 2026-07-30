import React from "react";
import bigimg from "./assets/showcase-4.webp";

function Formseginin() {
  return (
    <>
      <section className="container mt-5">
        <div className="row reservation-section-row">
          <div className="col-md-6 mt-5">
            <div className="reservation-card">
              <span className="sub-title">MAKE A RESERVATION</span>
              <h2 className="main-title">Reserve Your Table Today</h2>
              <p className="description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                eget eros vitae magna eleifend lacinia a eget nisl.
              </p>

              <form className="reservation-form">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control-custom"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control-custom"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control-custom"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Number of People</label>
                  <select className="form-control-custom">
                    <option value="">Select guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4+ People</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Reservation Date</label>
                  <input type="date" className="form-control-custom" />
                </div>
                <div className="form-group">
                  <label className="form-label">Reservation Time</label>
                  <input type="time" className="form-control-custom" />
                </div>
                <div className="form-group">
                  <label className="form-label">Special Requests</label>
                  <textarea
                    className="form-control-custom textarea-custom"
                    rows="3"
                    placeholder="Allergies, special occasions, seating preferences"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn-confirm-reservation hover-up"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-card">
              <div className="info-img-wrapper">
                <img
                  src={bigimg}
                  alt="Restaurant Interior"
                  className="info-main-img"
                />
              </div>

              <div className="info-content">
                <h3 className="info-title">Restaurant Information</h3>
                <div className="info-list">
                  <div className="info-item">
                    <div className="icon-box">
                      <i className="bi bi-clock"></i>
                    </div>
                    <div className="item-text">
                      <h5>Opening Hours</h5>
                      <p>Mon - Fri: 11:00 AM - 11:00 PM</p>
                      <p>Sat - Sun: 10:00 AM - 12:00 AM</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="item-text">
                      <h5>Our Location</h5>
                      <p>5625 Riverside Avenue</p>
                      <p>Newport, RI 02840</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-box">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="item-text">
                      <h5>Reservations</h5>
                      <p>+1 (401) 555-8792</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="item-text">
                      <h5>Email Us</h5>
                      <p>reservations@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="call-box-wrapper">
                  <span className="call-title">Prefer to call?</span>
                  <a href="tel:+14015558792" className="btn-call-action hover-invert">
                    <i className="bi bi-telephone-fill"></i>
                    <span>Call for Reservations</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formseginin;
