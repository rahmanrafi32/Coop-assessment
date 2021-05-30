import {
  faClock,
  faCode,
  faEdit,
  faEnvelope,
  faExclamationTriangle,
  faFlag,
  faFolderOpen,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StudentCard = () => {
  return (
    <div className="row d-flex justify-content-center mx-3">
      <div
        className="col-md-3 card border-light mx-3 my-5"
        style={{ maxWidth: "14rem" }}
      >
        <div style={{ fontSize: "50px" }} class="p-3 card-body d-flex">
          <h3 className="card-title  ">
            579 <br /> <span className="text-secondary fs-5">ASSIGNMENTS</span>
          </h3>
          <p className="card-text p-3" style={{ color: "#FFC36D" }}>
            {" "}
            <FontAwesomeIcon icon={faCode} />
          </p>
        </div>
        <div className="text-center card-header " style={{ color: "#FFC36D" }}>
          {" "}
          <small>
            {" "}
            <FontAwesomeIcon icon={faEdit} />1 Submission Tomorrow{" "}
          </small>{" "}
        </div>
      </div>

      <div
        className="col-md-3 card border-light mx-3 my-5"
        style={{ maxWidth: "14rem" }}
      >
        <div style={{ fontSize: "50px" }} class="p-3 card-body d-flex">
          <h3 className="card-title  ">
            {" "}
            67.5% <br />{" "}
            <span className="text-secondary  fs-5">ATTENDENCE</span>
          </h3>
          <p className="card-text text-danger p-3 ">
            {" "}
            <FontAwesomeIcon icon={faUserSecret} />
          </p>
        </div>
        <div className="text-center text-danger card-header">
          {" "}
          <small>
            {" "}
            <FontAwesomeIcon icon={faExclamationTriangle} /> Below 70%{" "}
          </small>{" "}
        </div>
      </div>

      <div
        className="col-md-3 card border-light mx-3 my-5"
        style={{ maxWidth: "14rem" }}
      >
        <div style={{ fontSize: "50px" }} className="p-3 card-body d-flex">
          <h3 className="card-title  ">
            900 <br /> <span className="text-secondary  fs-5">EVENTS</span>
          </h3>
          <p className="card-text text-primary p-3 ">
            {" "}
            <FontAwesomeIcon icon={faFlag} />
          </p>
        </div>
        <div className="text-center text-primary card-header">
          {" "}
          <small>
            <FontAwesomeIcon icon={faClock} /> 1 Event tomorrow{" "}
          </small>
        </div>
      </div>

      <div
        className="col-md-3 card border-light mx-3 my-5"
        style={{ maxWidth: "14rem" }}
      >
        <div style={{ fontSize: "50px" }} className="p-3 card-body d-flex">
          <h3 className="card-title  ">
            765 <br /> <span className="text-secondary  fs-5">MESSAGES</span>
          </h3>
          <p className="card-text text-success  p-3">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
          </p>
        </div>
        <div className="text-center text-success card-header">
          {" "}
          <small>
            <FontAwesomeIcon icon={faFolderOpen} /> 10 Unread messages
          </small>{" "}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
