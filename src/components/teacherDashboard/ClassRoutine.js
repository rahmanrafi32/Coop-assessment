import React from "react";
import { useSelector } from "react-redux";

function ClassRoutine() {
  const classSchedule = useSelector(
    (state) => state.teacherDashboardData.classSchedule
  );

  return (
    <div className="m-4">
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          <i className="bi bi-calendar"></i> TODAY'S SCHEDULE{" "}
        </li>

        {classSchedule.map((s, i) => (
          <li className="list-group-item" key={s.courseName + i}>
            {s.courseName} <br />
            Room No - {s.roomNo}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassRoutine;
