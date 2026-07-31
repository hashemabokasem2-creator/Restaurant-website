import React from "react";

function Maptorestaurant() {
  return (
    <>
      <section className="container mt-5">
        <div className="row location-section-row">
          <div className="col-md-8">
            <div className="location-card">
              <h2 className="location-title">Visit Our Establishment</h2>
              <p className="location-subtitle">
                Located in the heart of Manhattan's culinary district
              </p>
              <div className="map-wrapper">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215702280209!2d-73.9878531!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="google-map-iframe"
                ></iframe>
              </div>
              <div className="transport-section">
                <h4 className="transport-title">Transportation & Parking</h4>

                <div className="transport-grid">
                  <div className="transport-card">
                    <div className="transport-icon-box">
                      <i className="bi bi-train-front"></i>
                    </div>
                    <div className="transport-info">
                      <h5>Subway</h5>
                      <p>Union Square Station (4, 5, 6, L, N, Q, R, W)</p>
                    </div>
                  </div>
                  <div className="transport-card">
                    <div className="transport-icon-box">
                      <i className="bi bi-p-square"></i>
                    </div>
                    <div className="transport-info">
                      <h5>Valet Parking</h5>
                      <p>Available daily from 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="contact-info-column">
              <div className="contact-card">
                <div className="contact-icon-box">
                  <i className="bi bi-building"></i>
                </div>
                <h4 className="contact-card-title">Address</h4>
                <p className="contact-card-text">847 Broadway Avenue</p>
                <p className="contact-card-text">New York, NY 10003</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <h4 className="contact-card-title">Reservations</h4>
                <p className="contact-card-phone">+1 (555) 234-5678</p>
                <span className="contact-card-note">
                  Recommended 24-48 hours advance booking
                </span>
              </div>
              <div className="contact-card">
                <div className="contact-icon-box">
                  <i className="bi bi-clock"></i>
                </div>
                <h4 className="contact-card-title">Operating Hours</h4>
                <div className="hours-list">
                  <div className="hours-row">
                    <span className="day-name">Tuesday - Thursday</span>
                    <span className="time-value">5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Friday - Saturday</span>
                    <span className="time-value">5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Sunday</span>
                    <span className="time-value">4:00 PM - 9:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Monday</span>
                    <span className="time-closed">Closed</span>
                  </div>
                </div>
              </div>
              <div className="action-buttons-group">
                <button type="button" className="btn-primary-action">
                  Book a Table
                </button>
                <button type="button" className="btn-outline-action">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maptorestaurant;
