import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faChartBar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "20 Jul", ABSENT: 10, LEAVE: 15, PRESENT: 30 },
    { name: "21 Jul", ABSENT: 12, LEAVE: 27, PRESENT: 48 },
    { name: "22 Jul", ABSENT: 20, LEAVE: 20, PRESENT: 33 },
    { name: "23 Jul", ABSENT: 9, LEAVE: 28, PRESENT: 40 },
    { name: "24 Jul", ABSENT: 8, LEAVE: 18, PRESENT: 48 },
    { name: "25 Jul", ABSENT: 19, LEAVE: 10, PRESENT: 30 },
    { name: "26 Jul", ABSENT: 15, LEAVE: 30, PRESENT: 28 },
  ];
  return (
    <div className="row mt-5">
      <div className="col-md-8  d-block  justify-content-center">
        <div className="container px-5 fw-bold text-secondary">
          <FontAwesomeIcon icon={faChartBar} />
          <span className="mx-2"> STUDENT ATTENDENCE TREND</span>
          <hr />
        </div>

        <LineChart width={700} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="" strokeDasharray="" />
          <Line
            type="monotone"
            strokeWidth={3}
            dataKey="ABSENT"
            stroke="#DC3545"
          />
          <Line
            type="monotone"
            strokeWidth={3}
            dataKey="LEAVE"
            stroke="#FFC107"
          />
          <Line
            type="monotone"
            strokeWidth={3}
            dataKey="PRESENT"
            stroke="#198754"
          />
        </LineChart>
        <div className=" text-center my-5">
          <p className="bg-danger text-white rounded px-3 py-2 m-2 d-inline">
            ABSENT
          </p>
          <p className="bg-warning text-white rounded px-3 py-2 m-2 d-inline">
            ON LEAVE
          </p>
          <p className="bg-success text-white rounded px-3 py-2 m-2 d-inline">
            PRESENT
          </p>
        </div>
      </div>

      <div className="col-md-4 d-flex justify-content-center mb-4">
        <ul
          className="list-group"
          style={{ maxWidth: "20rem", border: "none" }}
        >
          <li className="list-group-item py-3 text-secondary fw-bold ">
            {" "}
            <FontAwesomeIcon icon={faCalendarAlt} /> TODAY'S TASK
          </li>
          <li className="list-group-item py-3 d-flex">
            <p className="rounded-circle bg-danger mx-3 fs-5 py-3 text-white">
              {" "}
              <small className="p-2">10 am</small>
            </p>
            <p>
              {" "}
              Teacher Meeting <br />
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
              Campus Tour <br />
              <small className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} /> CAMPUS{" "}
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
              Parent Meeting <br />
              <small className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} /> ROOM NO - 601
              </small>{" "}
            </p>
          </li>
          <li className="list-group-item py-3 d-flex">
            <p className="rounded-circle bg-danger mx-3 fs-5 py-3 text-white">
              {" "}
              <small className="p-2">01 pm</small>
            </p>
            <p>
              {" "}
              Guest Lecture <br />
              <small className="text-secondary">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} /> ROOM NO - 601
              </small>{" "}
            </p>
          </li>
          <li className="list-group-item py-3 d-flex">
            <p className="rounded-circle bg-danger mx-3 fs-5 py-3 text-white">
              {" "}
              <small className="p-2">02 pm</small>
            </p>
            <p>
              {" "}
              Teacher Meeting <br />
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

export default Chart;
