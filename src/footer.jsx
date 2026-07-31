import React from "react";

function Footer() {
  return (
    <>
      <footer className="container-fluid mt-5">
        <hr />
        <div className="container">
          <div className="row p-5">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-about">
                <h3 className="footer-brand">Savora</h3>
                <p className="footer-text">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae. Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula.
                </p>
                <h5 className="newsletter-title">Stay Updated</h5>
                <form className="newsletter-form" action="#" method="POST">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    <i className="bi bi-send-fill"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="footer-links-col">
                <h4 className="footer-title">Company</h4>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Careers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Press</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="footer-links-col">
                <h4 className="footer-title">Solutions</h4>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Digital Strategy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Cloud Computing</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Data Analytics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>AI Solutions</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right link-icon"></i>
                      <span>Cybersecurity</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-contact-col">
                <h4 className="footer-title">Get in Touch</h4>

                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <div className="contact-icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="contact-info-text">
                      2847 Maple Avenue
                      <br />
                      Los Angeles, CA 90210
                      <br />
                      United States
                    </div>
                  </li>

                  <li className="contact-info-item">
                    <div className="contact-icon-box">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="contact-info-text">+1 (555) 987-6543</div>
                  </li>

                  <li className="contact-info-item">
                    <div className="contact-icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="contact-info-text">contact@example.com</div>
                  </li>
                </ul>

                <div className="footer-social-icons">
                  <a href="#" className="footer-social-btn">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="footer-social-btn">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="footer-social-btn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="footer-social-btn">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="footer-social-btn">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container p-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="copyright-text mb-0">
                © Copyright <strong>MyWebsite</strong> All Rights Reserved
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <ul className="footer-legal-links list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Service</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
              <div className="designer-credits">
                Designed by{" "}
                <a href="#" className="designer-link">
                  BootstrapMade
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
