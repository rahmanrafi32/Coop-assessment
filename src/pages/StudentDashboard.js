import React from "react";
import ClassSchedule from "../components/studentDashboard.js/ClassSchedule";
import Notification from "../components/studentDashboard.js/Notification";
import StudentCard from "../components/studentDashboard.js/StudentCard";
import StudentInfo from "../components/studentDashboard.js/StudentInfo";
import StudentSMS from "../components/studentDashboard.js/StudentSMS";

function StudentDashboard() {
  return (
    <>
      <StudentCard />
      <div className="d-flex flex-column flex-lg-row justify-content-around ">
        <StudentInfo />
        <Notification />
        <ClassSchedule />
      </div>

      <div className="mt-5">
        {" "}
        <StudentSMS />
      </div>
    </>
  );
}

export default StudentDashboard;
