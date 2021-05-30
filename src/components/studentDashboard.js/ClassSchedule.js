import React from "react";
import { useSelector } from "react-redux";

export default function ClassSchedule() {
  const data = useSelector(
    (state) => state?.studentDashboardData?.classSchedule
  );

  return (
    <div className="mt-4">
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Today's class schedule
        </li>

        {data.map((data, i) => (
          <li className="list-group-item" key={i}>
            {data.courseName}

            <br />
            {data.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
