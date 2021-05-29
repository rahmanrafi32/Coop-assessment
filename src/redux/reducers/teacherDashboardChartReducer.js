import attendence from "../../fakeData/attendence.json";
import assignmentAssessment from "../../fakeData/assignmentAssessment.json";
import teacherAnnouncement from "../../fakeData/teacherAnnouncement.json";
const primaryState = {
  attendence: attendence,
  assignmentAssessment: assignmentAssessment,
  academicAnnouncement: teacherAnnouncement,
  classSchedule: [
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
  ],
};

const teacherDashboardChartReducer = (state = primaryState, action) => {
  return state;
};

export default teacherDashboardChartReducer;
