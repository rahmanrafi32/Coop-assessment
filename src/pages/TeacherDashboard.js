import React from "react";
import Announcement from "../components/teacherDashboard/Announcement";
import AttendenceChart from "../components/teacherDashboard/AttendenceChart";
import AssignmentAssessmentChart from "../components/teacherDashboard/AssignmentAssessmentChart";
import ClassRoutine from "../components/teacherDashboard/ClassRoutine";
import InfoCards from "../components/teacherDashboard/InfoCards";

export default function TeacherDashboard() {
  return (
    <div>
      <InfoCards />
      <div className="d-flex flex-column flex-md-row justify-content-around">
        <AttendenceChart />
        <ClassRoutine />
      </div>
      <Announcement />
      <AssignmentAssessmentChart />
    </div>
  );
}
