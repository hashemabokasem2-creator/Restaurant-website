import React from "react";
import imagechef from "./assets/chef-3.webp";
import imagebrek from "./assets/showcase-2.webp";
import imagesnak from "./assets/main-4.webp";
import imagefamile from "./assets/misc-7.webp";

function Sectionchef() {
  return (
    <>
      <section className="container mt-5">
        <div className="row food gap-3">
          <div className="col-md-5 mb-4 mt-4 ms-5">
            <div className="chef-image-wrapper">
              <img
                src={imagechef}
                alt="Executive Chef"
                className="chef-image"
              />
              <div className="chef-overlay"></div>
              <div className="chef-experience-card">
                <span className="exp-number">25+</span>
                <span className="exp-text">YEARS OF CULINARY EXCELLENCE</span>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="chef-content-wrapper">
              <h2 className="chef-title">Meet Our Executive Chef</h2>
              <p className="chef-subtitle">
                Crafting memorable dining experiences since 1999
              </p>
              <p className="chef-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className="chef-description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="chef-awards-wrapper">
                <div className="award-item">
                  <i className="bi bi-award award-icon"></i>
                  <span className="award-text">James Beard Award</span>
                </div>
                <div className="award-item">
                  <i className="bi bi-star award-icon"></i>
                  <span className="award-text">Michelin Recognition</span>
                </div>
              </div>
              <div className="chef-quote-card rounded-3">
                <p className="quote-text">
                  "Cooking is not just about feeding people; it's about creating
                  moments that bring families and friends together around the
                  table."
                </p>
                <span className="quote-author">- Chef Alessandro Romano</span>
              </div>
              <div className="chef-buttons-wrapper">
                <button className="btn-primary-custom hover-up rounded-3">
                  View Menu
                </button>
                <button className="btn-outline-custom hover-up hover-invert rounded-3">
                  Book a Table
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row food mt-5">
          <div className="col-md-3">
            <div className="custom-img-card">
              <img src={imagebrek} alt="Elegant Dining" className="custom-card-img" />
              <div className="custom-card-overlay">
                <h3 className="overlay-title">Elegant Dining</h3>
                <p className="overlay-text">
                  Sophisticated ambiance for every occasion
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="custom-img-card">
              <img src={imagesnak} alt="Delicious Food" className="custom-card-img" />
              <div className="custom-card-overlay">
                <h3 className="overlay-title">Delicious Food</h3>
                <p className="overlay-text">
                  Fresh ingredients crafted with passion
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="custom-img-card">
              <img src={imagefamile} alt="Great Atmosphere" className="custom-card-img" />
              <div className="custom-card-overlay">
                <h3 className="overlay-title">Great Atmosphere</h3>
                <p className="overlay-text">
                  Unforgettable moments with friends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sectionchef;
