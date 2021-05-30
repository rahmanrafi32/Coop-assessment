import React from "react";
import { useSelector } from "react-redux";

function StudentInfo() {
  const { id, name, photo, semester, address } = useSelector(
    (state) => state.studentDashboardData.info
  );
  return (
    <div className="mt-4">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="d-flex align-items-center justify-content-around">
          <div>
            <img
              className="w-25 rounded-circle h-25 p-3"
              src={photo}
              alt="..."
            />
          </div>
          <p className="p-3">Name: {name} </p>
        </div>
        <hr />
        <div className="m-2">
          <p>ID : {id}</p>
          <p>Semester: {semester} </p>
          <p>Address: {address}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
