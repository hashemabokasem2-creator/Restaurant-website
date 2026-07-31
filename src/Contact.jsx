import React from "react";

function Contact() {
  return (
    <>
      <section className="container mt-5" id="contact">
        <div className="row custom-title-row">
          <div className="col-md-6 mt-5">
            <div className="section-title">
              <h2>Contact</h2>
              <div className="section-divider"></div>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div class="col-12 col-md-5">
            <div class="contact-card">
              <h2>Contact Information</h2>
              <p class="contact-description">
                Feel free to reach out with any questions about the book,
                speaking engagements, or media inquiries.
              </p>

              <ul class="contact-list">
                <li class="contact-item">
                  <i class="bi bi-envelope contact-icon"></i>
                  <div class="contact-details">
                    <span class="contact-label">Email:</span>
                    <span class="contact-text">author@example.com</span>
                  </div>
                </li>
                <li class="contact-item">
                  <i class="bi bi-telephone contact-icon"></i>
                  <div class="contact-details">
                    <span class="contact-label">Phone:</span>
                    <span class="contact-text">+1 (555) 123-4567</span>
                  </div>
                </li>
                <li class="contact-item">
                  <i class="bi bi-geo-alt contact-icon"></i>
                  <div class="contact-details">
                    <span class="contact-label">Address:</span>
                    <span class="contact-text">
                      123 Book Street, Literary Lane Wordsmith City, NY 10001
                    </span>
                  </div>
                </li>
              </ul>

              <div class="social-icons-wrapper">
                <a href="#" class="social-circle">
                  <i class="bi bi-twitter-x social-icon-inner"></i>
                </a>
                <a href="#" class="social-circle">
                  <i class="bi bi-facebook social-icon-inner"></i>
                </a>
                <a href="#" class="social-circle">
                  <i class="bi bi-instagram social-icon-inner"></i>
                </a>
                <a href="#" class="social-circle">
                  <i class="bi bi-linkedin social-icon-inner"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-7 mt-4 mt-md-0">
            <div class="contact-form-card">
              <form action="#" method="POST">
                <div class="form-row-double">
                  <div class="form-group">
                    <label for="name" class="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="form-control-custom"
                      placeholder="John Doe"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="form-control-custom"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="subject" class="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="form-control-custom"
                    placeholder="I loved your book!"
                  />
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    class="form-control-custom textarea-custom"
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div class="form-submit-wrapper">
                  <button type="submit" class="submit-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
