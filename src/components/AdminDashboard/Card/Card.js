import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEdit,
  faEnvelope,
  faExclamationTriangle,
  faFlag,
  faFolderOpen,
  faUsers,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div
        className="col-md-3 card border-light mx-3 my-5"
        style={{ maxWidth: "14rem" }}
      >
        <div style={{ fontSize: "50px" }} className="p-3 card-body d-flex">
          <h3 className="card-title  ">
            199 <br /> <span className="text-secondary fs-5">STUDENTS</span>
          </h3>
          <p className="card-text p-3" style={{ color: "#FFC36D" }}>
            {" "}
            <FontAwesomeIcon icon={faUsers} />
          </p>
        </div>
        <div className="text-center card-header " style={{ color: "#FFC36D" }}>
          {" "}
          <small>
            {" "}
            <FontAwesomeIcon icon={faEdit} /> 10 Absent Today{" "}
          </small>{" "}
        </div>
      </div>

      <div
        className="col-md-3 card border-light mx-3 my-5"
        style={{ maxWidth: "14rem" }}
      >
        <div style={{ fontSize: "50px" }} className="p-3 card-body d-flex">
          <h3 className="card-title  ">
            111 <br /> <span className="text-secondary  fs-5">TEACHERS</span>
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
            <FontAwesomeIcon icon={faExclamationTriangle} /> 5 On Leave Today{" "}
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
            <FontAwesomeIcon icon={faFolderOpen} /> 10 Absent Today{" "}
          </small>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
