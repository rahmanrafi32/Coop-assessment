import React from "react";
import ClassSchedule from "../components/studentDashboard.js/ClassSchedule";
import Notification from "../components/studentDashboard.js/Notification";
import StudentInfo from "../components/studentDashboard.js/StudentInfo";

function StudentDashboard() {
  return (
    <div class="d-flex flex-column flex-lg-row justify-content-around ">
      <StudentInfo />
      <Notification />
      <ClassSchedule />
    </div>
  );
}

export default StudentDashboard;
