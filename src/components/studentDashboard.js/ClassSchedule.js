import React from "react";
import { useSelector } from "react-redux";

export default function ClassSchedule() {
  const data = useSelector(
    (state) => state?.studentDashboardData?.classSchedule
  );

  return (
    <div class="mt-4">
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">
          Today's class schedule
        </li>

        {data.map((data, i) => (
          <li class="list-group-item" key={i}>
            {data.courseName}

            <br />
            {data.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
