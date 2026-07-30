import React from "react";

function Bookaservice() {
  return (
    <>
      <section className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="event-plan-info">
              <h2 className="plan-title">Plan Your Next Event</h2>
              <p className="plan-description">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Call Us</span>
                    <strong className="contact-value">+1 (555) 123-4567</strong>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <strong className="contact-value">
                      events@example.com
                    </strong>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Planning Hours</span>
                    <strong className="contact-value">Mon-Fri 9AM-6PM</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="inquiry-card">
              <h3 className="inquiry-title">Quick Event Inquiry</h3>

              <form className="inquiry-form">
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      className="custom-input"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="tel"
                      className="custom-input"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-6">
                    <input type="date" className="custom-input" />
                  </div>
                  <div className="col-6">
                    <select className="custom-select" defaultValue="">
                      <option value="" disabled hidden>
                        Guest Count
                      </option>
                      <option value="1">15-60 guests</option>
                      <option value="2">20-120 guests</option>
                      <option value="3">30-80 guests</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <select className="custom-select" defaultValue="">
                      <option value="" disabled hidden>
                        Event Type
                      </option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate</option>
                      <option value="birthday">Birthday</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="custom-textarea"
                      rows="4"
                      placeholder="Tell us about your event..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="inquiry-submit-btn">
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bookaservice;
