import React from "react";
import sheff from "./assets/chef-8.webp";
import tawkeh from "./assets/signature-1.webp";
import chefgrm from "./assets/chef-5.webp";
import chefbr from "./assets/chef-9.webp";
import chefyo from "./assets/chef-2.webp";
import chefgrf from "./assets/chef-4.webp";

function Chefs() {
  return (
    <>
      <section className="container mt-5">
        <div className="row custom-title-row">
          <div className="col-md-6">
            <div className="section-title">
              <h2>Chefs</h2>
              <div className="section-divider"></div>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
          </div>
        </div>
        <div className="row chef-section-row mb-5">
          <div className="col-md-5">
            <div className="chef-info-wrapper">
              <div className="chef-badge">
                <i className="bi bi-award"></i>
                <span>EXECUTIVE CHEF</span>
              </div>
              <h2 className="chef-name">Eliot Johnson</h2>
              <div className="chef-experience">
                <span className="exp-number">15+</span>
                <span className="exp-text">YEARS OF EXCELLENCE</span>
              </div>
              <p className="chef-description">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae. Mauris viverra veniam sit amet lacus
                cursus, vel blandit libero tempus. Nulla facilisi morbi tempus
                iaculis urna id volutpat lacus laoreet non curabitur gravida.
              </p>
              <div className="chef-awards-list">
                <div className="award-item">
                  <i className="bi bi-trophy-fill award-icon"></i>
                  <span className="award-text">
                    Culinary Excellence Award 2023
                  </span>
                </div>

                <div className="award-item">
                  <i className="bi bi-star-fill award-icon"></i>
                  <span className="award-text">
                    Michelin Featured Restaurant
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="chef-image-wrapper img-container">
              <div className="decorated-bg"></div>
              <img src={sheff} alt="Eliot Johnson" className="chef-main-img hover-zoom" />

              <div className="signature-card img-container">
                <img
                  src={tawkeh}
                  alt="Eliot Johnson Signature"
                  className="signature-img hover-zoom"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row team-section-row">
  <div className="col-md-3">
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={chefgrm} alt="Elena Vasquez" className="team-img" />
      </div>
      <div className="team-info">
        <h4 className="member-name">Elena Vasquez</h4>
        <span className="member-role">HEAD PASTRY CHEF</span>
        <p className="member-desc">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={chefbr} alt="David Thompson" className="team-img" />
      </div>
      <div className="team-info">
        <h4 className="member-name">David Thompson</h4>
        <span className="member-role">SOUS CHEF</span>
        <p className="member-desc">
          Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={chefyo} alt="Maria Santos" className="team-img" />
      </div>
      <div className="team-info">
        <h4 className="member-name">Maria Santos</h4>
        <span className="member-role">KITCHEN MANAGER</span>
        <p className="member-desc">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="team-card">
      <div className="team-img-wrapper">
        <img src={chefgrf} alt="Roberto Kim" className="team-img" />
      </div>
      <div className="team-info">
        <h4 className="member-name">Roberto Kim</h4>
        <span className="member-role">WINE SOMMELIER</span>
        <p className="member-desc">
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
        </p>
      </div>
    </div>
  </div>
</div>
      </section>
    </>
  );
}

export default Chefs;
