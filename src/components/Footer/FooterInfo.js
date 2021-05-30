import {
    faCalendarAlt,
    faClock,
    faEnvelope,
    faGraduationCap,
    faMapMarkedAlt,
    faPhone,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterInfo = () => {
  return (
    <div className="row  d-flex justify-content-center ">
      <div className="col-md-3 mx-4 px-4">
        <h6>CONTACT US</h6>
        <p>
          {" "}
          <FontAwesomeIcon icon={faMapMarkedAlt} /> 3768 Seabury Ct, Burlington,
          NC, 27215
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone} /> +1 8910000891
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faEnvelope} /> email@pathshala.com
        </p>
      </div>
      <div className="col-md-2">
        <h6>QUICK LINKS</h6>
        <p>
          {" "}
          <FontAwesomeIcon icon={faGraduationCap} /> Academics
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faUsers} /> Admission
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faCalendarAlt} /> Events
        </p>
        <p>Campus Life</p>
      </div>

      <div className="col-md-3">
        <h6>Class TIMINGS</h6>
        <p>
          {" "}
          <FontAwesomeIcon icon={faClock} /> MON - FRI 9:00 AM - 3:00 PM
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faClock} /> SAT 9:00 AM - 1:00 PM
        </p>
      </div>

      <div className="col-md-3 px-5">
        <h6>SUBSCRIBE</h6>
        <br />
        <input
          type="text"
          class="form-control  "
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
        <br />
        <button type="button" class="btn btn-outline-light">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FooterInfo;
