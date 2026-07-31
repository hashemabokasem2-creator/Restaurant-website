import React, { useState } from "react";
import imgsfon from "./assets/starter-3.webp";
import imgsftw from "./assets/showcase-5.webp";
import imgsfthr from "./assets/main-7.webp";
import imgsffou from "./assets/chef-6.webp";
import imgsffiv from "./assets/event-4.webp";
import imgsfsix from "./assets/showcase-2.webp";
import imgsfsev from "./assets/chef-3.webp";
import imgsfeig from "./assets/dessert-5.webp";
import imgsfnin from "./assets/event-8.webp";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Food", "Interior", "Events", "Staff"];

  return (
    <>
      <section className="container mt-5">
        <div className="row custom-title-row">
          <div className="col-md-6">
            <div className="section-title">
              <h2>Gallery</h2>
              <div className="section-divider"></div>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4 aliquid">
          <div className="filter-buttons-wrapper aliquid">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="row g-4 gallery-grid-row">
          {(activeFilter === "All" || activeFilter === "Food") && (
            <div className="col-md-4 fade-zoom" key={`card1-${activeFilter}`}>
              <div className="gallery-card">
                <img src={imgsfon} alt="Gallery Item" className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Signature Main Course</h4>
                    <p className="overlay-description">
                      Chef's special with seasonal vegetables
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Interior") && (
            <div className="col-md-4 fade-zoom" key={`card2-${activeFilter}`}>
              <div className="gallery-card">
                <img src={imgsftw} alt="Gallery Item" className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Luxury Dining Hall</h4>
                    <p className="overlay-description">
                      Modern interior design for events
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Food") && (
            <div className="col-md-4 fade-zoom" key={`card3-${activeFilter}`}>
              <div className="gallery-card">
                <img
                  src={imgsfthr}
                  alt="Gallery Item"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Wine Tasting Evening</h4>
                    <p className="overlay-description">
                      Monthly culinary experience with paired wines
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Staff") && (
            <div className="col-md-4 fade-zoom" key={`card4-${activeFilter}`}>
              <div className="gallery-card">
                <img
                  src={imgsffou}
                  alt="Gallery Item"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Luxury Dining Hall</h4>
                    <p className="overlay-description">
                      Modern interior design for events
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Events") && (
            <div className="col-md-4 fade-zoom" key={`card5-${activeFilter}`}>
              <div className="gallery-card">
                <img
                  src={imgsffiv}
                  alt="Gallery Item"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Luxury Dining Hall</h4>
                    <p className="overlay-description">
                      Modern interior design for events
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Interior") && (
            <div className="col-md-4 fade-zoom" key={`card6-${activeFilter}`}>
              <div className="gallery-card">
                <img
                  src={imgsfsix}
                  alt="Gallery Item"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Luxury Dining Hall</h4>
                    <p className="overlay-description">
                      Modern interior design for events
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Staff") && (
            <div className="col-md-4 fade-zoom" key={`card7-${activeFilter}`}>
              <div className="gallery-card">
                <img
                  src={imgsfsev}
                  alt="Gallery Item"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Luxury Dining Hall</h4>
                    <p className="overlay-description">
                      Modern interior design for events
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Food") && (
            <div className="col-md-4 fade-zoom" key={`card8-${activeFilter}`}>
              <div className="gallery-card">
                <img
                  src={imgsfeig}
                  alt="Gallery Item"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Luxury Dining Hall</h4>
                    <p className="overlay-description">
                      Modern interior design for events
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(activeFilter === "All" || activeFilter === "Events") && (
            <div className="col-md-4 fade-zoom" key={`card9-${activeFilter}`}>
              <div className="gallery-card">
                <img
                  src={imgsfnin}
                  alt="Gallery Item"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Luxury Dining Hall</h4>
                    <p className="overlay-description">
                      Modern interior design for events
                    </p>
                    <button className="overlay-btn">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Gallery;
