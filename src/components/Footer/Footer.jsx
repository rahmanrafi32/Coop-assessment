import {
  faFacebook,
  faGooglePlus,
  faLinkedin,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <div className="footer-row text-center pb-5">
      <h3 className="fw-bold ">
        <FontAwesomeIcon icon={faGraduationCap} /> <br /> PATHSHALA
      </h3>
      <h6>BETTER WAY TO LEARN & GROW</h6>
      <br /> <br />
      <FooterInfo></FooterInfo>
      <h1 className="mt-5">
        <span>
          {" "}
          <FontAwesomeIcon icon={faFacebook} />
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faTwitterSquare} />
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faGooglePlus} />
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </h1>
      <hr />
      <small>Copyright © 2021 email@pathshala.com</small>
    </div>
  );
};

export default Footer;
