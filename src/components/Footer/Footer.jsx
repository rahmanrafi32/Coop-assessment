import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-row">
      <div className="container">
        <div class="row">
          <div class="school-logo">
            <h3>PATHSHALA</h3>
            <h6>BETTER WAY TO LEARN &amp; GROW</h6>
          </div>
          <div class="col-md-4 col-sm-6 footer-item">
            <h5>CONTACT US</h5>
            <p>3768 Seabury Ct, Burlington, NC, 27215</p>
            <p>+1 8910000891</p>
            <p>email@pathshala.com</p>
          </div>
          <div class="col-md-2 col-sm-6 footer-item">
            <h5>QUICK LINKS</h5>
            <div class="quick-link-box">
              <a href="#">Academics</a>
              <a href="#">Admission</a>
              <a href="#">Events</a>
              <a href="#">Campus Life</a>
            </div>
          </div>
          <div class="clearfix visible-sm"></div>
          <div class="col-md-3 col-sm-6 footer-item">
            <h5>SCHOOL TIMINGS</h5>
            <p>MON - FRI 9:00 AM - 3:00 PM</p>
            <p>SAT 9:00 AM - 1:00 PM</p>
          </div>
          <div class="col-md-3 col-sm-6 footer-item">
            <h5>SUBSCRIBE</h5>
            <div class="footer-subscribe">
              <input type="text" placeholder="example@pathshala.com" />
            </div>
            <a href="#" class="subscribe-link">
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
