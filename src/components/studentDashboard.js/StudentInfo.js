import React from "react";
import { useSelector } from "react-redux";

function StudentInfo() {
  const { id, name, photo, semester, address } = useSelector(
    (state) => state.studentDashboardData.info
  );
  return (
    <div class="mt-4">
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="d-flex align-items-center justify-content-around">
          <div>
            <img class="w-25 rounded-circle h-25 p-3" src={photo} alt="..." />
          </div>
          <p class="p-3">Name: {name} </p>
        </div>
        <hr />
        <div class="m-2">
          <p>ID : {id}</p>
          <p>Semester: {semester} </p>
          <p>Address: {address}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
