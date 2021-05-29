import React from "react";
import { useSelector } from "react-redux";

function ClassRoutine() {
  const classSchedule = useSelector(
    (state) => state.teacherDashboardData.classSchedule
  );

  return (
    <div class="m-4">
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">
          <i class="bi bi-calendar"></i> TODAY'S SCHEDULE{" "}
        </li>

        {classSchedule.map((s, i) => (
          <li class="list-group-item" key={s.courseName + i}>
            {s.courseName} <br />
            Room No - {s.roomNo}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassRoutine;
