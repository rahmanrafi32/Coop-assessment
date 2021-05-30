import React from "react";
import "./Footer.css";
import FooterInfo from "./FooterInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlus, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

  return (


    <div className="footer-row text-center pb-5">
     
      <h3 className='fw-bold '><FontAwesomeIcon icon={faGraduationCap} /> <br /> PATHSHALA</h3>
      <h6>BETTER WAY TO LEARN & GROW</h6>    
      
      <br /> <br />         

      <FooterInfo></FooterInfo>


      <h1  className='mt-5'>   
         <span> <FontAwesomeIcon icon={faFacebook} /></span>
         <span> <FontAwesomeIcon icon={faTwitterSquare} /></span>
         <span> <FontAwesomeIcon icon={faGooglePlus} /></span>
         <span> <FontAwesomeIcon icon={faLinkedin} /></span>

      </h1>
      <hr />
      <small>Copyright © 2021  email@pathshala.com</small>

    </div>







    // <div className="footer-row">
    //   <div className="container">
    //     <div className="row">
    //       <div className="school-logo">
    //         <h3>PATHSHALA</h3>
    //         <h6>BETTER WAY TO LEARN &amp; GROW</h6>
    //       </div>
    //       <div className="col-md-4 col-sm-6 footer-item">
    //         <h5>CONTACT US</h5>
    //         <p>3768 Seabury Ct, Burlington, NC, 27215</p>
    //         <p>+1 8910000891</p>
    //         <p>email@pathshala.com</p>
    //       </div>
    //       <div className="col-md-2 col-sm-6 footer-item">
    //         <h5>QUICK LINKS</h5>
    //         <div className="quick-link-box">
    //           <a href="#">Academics</a>
    //           <a href="#">Admission</a>
    //           <a href="#">Events</a>
    //           <a href="#">Campus Life</a>
    //         </div>
    //       </div>
    //       <div className="clearfix visible-sm"></div>
    //       <div className="col-md-3 col-sm-6 footer-item">
    //         <h5>SCHOOL TIMINGS</h5>
    //         <p>MON - FRI 9:00 AM - 3:00 PM</p>
    //         <p>SAT 9:00 AM - 1:00 PM</p>
    //       </div>
    //       <div className="col-md-3 col-sm-6 footer-item">
    //         <h5>SUBSCRIBE</h5>
    //         <div className="footer-subscribe">
    //           <input type="text" placeholder="example@pathshala.com" />
    //         </div>
    //         <a href="#" className="subscribe-link">
    //           SUBMIT
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
