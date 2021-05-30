import React from "react";
import { useSelector } from "react-redux";

function Announcement() {
  const academicAnnouncement = useSelector(
    (state) => state.teacherDashboardData.academicAnnouncement
  );

  return (
    <div style={{ height: "400px", overflow: "scroll", margin: "10px" }}>
      <p className="navbar navbar-light bg-info mx-3 sticky-top">
        <i className="bi bi-front mx-4 "> Academic Notification</i>
      </p>

      <div>
        {academicAnnouncement.map((data, i) => (
          <Card data={data} key={i} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ data }) => {
  const { title, time, subject } = data;
  console.log(time);
  return (
    <div className="card m-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {" "}
          <i className="bi bi-calendar-event-fill mx-3"></i>
          {time}
        </h6>
        <p className="card-text">{subject}</p>
      </div>
    </div>
  );
};

export default Announcement;
