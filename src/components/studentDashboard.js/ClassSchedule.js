import React from "react";

const data = [
  {
    courseName: "Mathematics (MTH101)",
    time: new Date().toLocaleDateString(),
  },
  {
    courseName: "Mathematics (MTH101)",
    time: new Date().toLocaleDateString(),
  },
  {
    courseName: "Mathematics (MTH101)",
    time: new Date().toLocaleDateString(),
  },
  {
    courseName: "Mathematics (MTH101)",
    time: new Date().toLocaleDateString(),
  },
];

export default function ClassSchedule() {
  return (
    <div class="mt-4">
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">
          Today's class schedule
        </li>
        <li class="list-group-item">A second item</li>
        {data.map((data) => (
          <li class="list-group-item">
            {data.courseName}

            <br />
            {data.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
