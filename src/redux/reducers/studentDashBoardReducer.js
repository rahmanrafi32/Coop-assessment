const primaryState = {
  info: {
    name: "Kaira",
    id: "123434564",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    semester: "3rd",
    address: "23 Lorem ipsum dolor sit amet.",
  },

  classSchedule: [
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
  ],
};

const studentDashboardReducer = (state = primaryState, action) => {
  return state;
};

export default studentDashboardReducer;
