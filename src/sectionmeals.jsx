import React, { useState } from "react";
import StartersSection from "./StartersSection.jsx";

function Meals() {
  const [activeTab, setActiveTab] = useState("starters");
  return (
    <>
      <section className="container mt-5">
        <div className="row custom-title-row">
          <div className="col-md-6">
            <div className="section-title">
              <h2>Menu</h2>
              <div className="section-divider"></div>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
          </div>
        </div>
        <div className="row custom-filter-row gy-3">
          <div className="col-12 col-md-2 d-flex justify-content-center">
            <button
              className={`filter-btn ${activeTab === "starters" ? "active" : ""}`}
              onClick={() => setActiveTab("starters")}
            >
              <i className="bi bi-flower1"></i>
              <span>Starters</span>
            </button>
          </div>

          <div className="col-12 col-md-2 d-flex justify-content-center">
            <button
              className={`filter-btn ${activeTab === "main-courses" ? "active" : ""}`}
              onClick={() => setActiveTab("main-courses")}
            >
              <i className="bi bi-cup-hot"></i>
              <span>Main Courses</span>
            </button>
          </div>

          <div className="col-12 col-md-2 d-flex justify-content-center">
            <button
              className={`filter-btn ${activeTab === "desserts" ? "active" : ""}`}
              onClick={() => setActiveTab("desserts")}
            >
              <i className="bi bi-cake2"></i>
              <span>Desserts</span>
            </button>
          </div>

          <div className="col-12 col-md-2 d-flex justify-content-center">
            <button
              className={`filter-btn ${activeTab === "beverages" ? "active" : ""}`}
              onClick={() => setActiveTab("beverages")}
            >
              <i className="bi bi-cup-straw"></i>
              <span>Beverages</span>
            </button>
          </div>
        </div>
        <div className="row"></div>
      </section>
    </>
  );
}

export default Meals;
