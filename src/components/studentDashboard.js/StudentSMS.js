import {
  faCalendarAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AnnouncementsCard from "../AdminDashboard/Card/AnnouncementsCard";

const StudentSMS = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <AnnouncementsCard></AnnouncementsCard>
      </div>

      <div className="col-md-4 d-flex justify-content-center mb-4">
        <ul className="list-group" style={{ maxWidth: "20rem", border: "none" }}>
          <li className="list-group-item py-3 text-secondary fw-bold ">
            {" "}
            <FontAwesomeIcon icon={faCalendarAlt} /> TOMORROW'S TIMETABLE
          </li>
          <li className="list-group-item py-3 d-flex">
            <p className="rounded-circle bg-danger mx-3 fs-5 py-3 text-white">
              {" "}
              <small className="p-2">10 am</small>
            </p>
            <p>
              {" "}
              Mathematics (MTH101) <br />
              <small className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} /> ROOM NO - 601
              </small>{" "}
            </p>
          </li>
          <li className="list-group-item py-3 d-flex">
            <p className="rounded-circle bg-danger mx-3 fs-5 py-3 text-white">
              {" "}
              <small className="p-2">11 am</small>
            </p>
            <p>
              {" "}
              Physics (PHY202) <br />
              <small className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} /> ROOM NO - 601
              </small>{" "}
            </p>
          </li>
          <li className="list-group-item py-3 d-flex">
            <p className="rounded-circle bg-danger mx-3 fs-5 py-3 text-white">
              {" "}
              <small className="p-2">11 am</small>
            </p>
            <p>
              {" "}
              English (E101) <br />
              <small className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} /> ROOM NO - 601
              </small>{" "}
            </p>
          </li>
          <li className="list-group-item py-3 d-flex">
            <p className="rounded-circle bg-danger mx-3 fs-5 py-3 text-white">
              {" "}
              <small className="p-2">12 pm</small>
            </p>
            <p>
              {" "}
              Biology (BIO101) <br />
              <small className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} /> ROOM NO - 601
              </small>{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentSMS;
