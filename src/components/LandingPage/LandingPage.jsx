import { Link } from "react-router-dom";
import React from "react";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing_body">
      <div className="get_started_section">
        <div className="left-part">
          <h1 className="storeName">DIGISTALL</h1>
          <h3 className="Welcome_message">Welcome to Digi-Rider</h3>
          <div className="bttnContainer">
            <p>
              <Link to="/login-signup" className="btn-link">
                Get Started
              </Link>
            </p>
          </div>
        </div>
        <div className="right-part">
          <a>
            <img
              src="http://thesplendidlifestyle.com/wp-content/uploads/2019/08/delivery.png"
              alt="Logo"
              className="delivery-img"
            />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Get Help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Mail Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="colpyright-section">
          <p className="Copyright">All Right Reserved to (C)| DigiStall</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
