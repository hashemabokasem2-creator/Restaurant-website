import iconone from "./assets/logo.png";
import React, { useState, useEffect } from "react";

function Navbarone() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky-nav-wrapper ${isScrolled ? "scrolled" : ""}`}>
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
            <div className="d-flex align-items-center gap-3">
              <a
                href="#book-a-table"
                className="btn-book-a-table d-none d-sm-block"
              >
                Book a Table
              </a>
              <i
                className="bi bi-list mobile-nav-toggle d-lg-none fs-5"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileNav"
              ></i>
              <div
                className="offcanvas offcanvas-end mt-4 me-3 custom-mobile-nav"
                tabIndex="-1"
                id="mobileNav"
              >
                <button
                  type="button"
                  className="btn-close btn-close-white custom-close-btn"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>

                <div className="offcanvas-body p-4">
                  <ul className="nav flex-column gap-3">
                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 ${activeNav === "Home" ? "active" : ""}`}
                        onClick={() => setActiveNav("Home")}
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 ${activeNav === "About" ? "active" : ""}`}
                        onClick={() => setActiveNav("About")}
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 ${activeNav === "Menu" ? "active" : ""}`}
                        onClick={() => setActiveNav("Menu")}
                        href="#"
                      >
                        Menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 ${activeNav === "Book a Table" ? "active" : ""}`}
                        onClick={() => setActiveNav("Book a Table")}
                        href="#"
                      >
                        Book a Table
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 ${activeNav === "Chefs" ? "active" : ""}`}
                        onClick={() => setActiveNav("Chefs")}
                        href="#"
                      >
                        Chefs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 ${activeNav === "Events" ? "active" : ""}`}
                        onClick={() => setActiveNav("Events")}
                        href="#"
                      >
                        Events
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 d-flex justify-content-between align-items-center ${activeNav === "Dropdown" ? "active" : ""}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsDropdownOpen(!isDropdownOpen);
                          setActiveNav("Dropdown");
                        }}
                      >
                        Dropdown
                        <span className="dropdown-icon-bg">
                          <i
                            className={`bi bi-chevron-${isDropdownOpen ? "up" : "down"} fs-7`}
                          ></i>
                        </span>
                      </a>

                      <div
                        className={`submenu-collapse ps-3 pt-2 ${isDropdownOpen ? "show" : ""}`}
                      >
                        <ul className="nav flex-column gap-2">
                          <li className="nav-item">
                            <a
                              className={`nav-link p-0 ${activeNav === "Option 1" ? "active" : ""}`}
                              href="#"
                              onClick={() => setActiveNav("Option 1")}
                            >
                              Dropdown 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className={`nav-link p-0 ${activeNav === "Option 2" ? "active" : ""}`}
                              href="#"
                              onClick={() => setActiveNav("Option 2")}
                            >
                              Dropdown 2
                            </a>
                          </li>
                            <li className="nav-item">
                            <a
                              className={`nav-link p-0 ${activeNav === "Option 2" ? "active" : ""}`}
                              href="#"
                              onClick={() => setActiveNav("Option 2")}
                            >
                              Dropdown 3
                            </a>
                          </li>
                            <li className="nav-item">
                            <a
                              className={`nav-link p-0 ${activeNav === "Option 2" ? "active" : ""}`}
                              href="#"
                              onClick={() => setActiveNav("Option 2")}
                            >
                              Dropdown 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link p-0 ${activeNav === "Contact" ? "active" : ""}`}
                        onClick={() => setActiveNav("Contact")}
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbarone;
