import React from "react";

function ClassRoutine() {
  const classSchedule = [
    {
      courseName: "Mathematics (MTH101)",
      roomNo: 601,
    },
    {
      courseName: "Physics (PHY101)",
      roomNo: 704,
    },
    {
      courseName: " (PHY101)",
      roomNo: 706,
    },
  ];

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
