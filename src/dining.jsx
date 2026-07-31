import React from "react";
import events from "./assets/event-2.webp";

function Dining() {
  return (
    <>
      <section className="container mt-5">
        <div className="row events-section-row align-items-center">
          <div className="col-md-6 mt-4">
            <div className="events-content-wrapper">
              <h2 className="events-title">
                Exceptional Events &amp; Private Dining
              </h2>

              <p className="events-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
              <div className="events-stats-group">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">EVENTS HOSTED</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number">200</span>
                  <span className="stat-label">MAX CAPACITY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="event-image-wrapper">
              <img
                src={events}
                alt="Private Dining Event"
                className="event-main-img"
              />
              <div className="event-floating-badge">
                <i className="bi bi-calendar-check"></i>
                <span>Book Your Event Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dining;
