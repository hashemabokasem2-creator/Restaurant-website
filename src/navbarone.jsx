import React from "react";
import iconone from "./assets/logo.png";

function Navbarone() {
  return (
    <>
      <div>
        <nav className="top-navbar">
          <div className="nav-left d-none d-md-flex">
            <img src={iconone} alt="Logo" className="nav-logo" />
                <div className="d-none d-lg-flex gap-3">
                     <i className="bi bi-tv nav-icon"></i>
            <i className="bi bi-tablet nav-icon"></i>
            <i className="bi bi-phone nav-icon"></i>
                </div>
          </div>
          <div className="nav-center">
            <i className="bi bi-chevron-left nav-icon"></i>
            <span className="nav-title">Savora</span>
            <i className="bi bi-chevron-right nav-icon"></i>
          </div>
          <div className="nav-right">
            <i className="bi bi-box-arrow-up-right nav-icon"></i>
            <a href="#" className="nav-btn-download">
              <i className="bi bi-download"></i>
              <span>DOWNLOAD</span>
            </a>
          </div>
        </nav>
        <div className="container">
            <nav className="main-navbar">
          <div className="nav-logo">
            <h2>Savora</h2>
          </div>

          <ul className="nav-links d-none d-lg-flex">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#book-a-table">Book a Table</a>
            </li>
            <li>
              <a href="#chefs">Chefs</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>
                    <i className="bi bi-chevron-left toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <a href="#book-a-table" className="btn-book-a-table d-none d-sm-block">
            Book a Table
          </a>
        </nav>
        </div>
      </div>
    </>
  );
}

export default Navbarone;
