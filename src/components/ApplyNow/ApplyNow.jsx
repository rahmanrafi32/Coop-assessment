import React from "react";
import "./ApplyNow.css";

const ApplyNow = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row apply-know-row">
          <div className="col-sm-6 admission-row">
            <h3>ADMISSIONS ARE OPEN</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the content of a page when looking at its layout.
            </p>
            <a href="#">APPLY NOW</a>
          </div>
          <div className="col-sm-6 info-row">
            <h3>HAVE ANY QUERIES?</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="input-wrapper">
              <input type="text" placeholder="e.g. email@pathshala.com" />
              <a href="#">SUBMIT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;

