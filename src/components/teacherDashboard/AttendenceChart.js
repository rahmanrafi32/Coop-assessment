import React from "react";
import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AttendenceChart() {
  const data = useSelector((state) => state.teacherDashboardData.attendence);

  return (
    <div className="table-responsive">
      <p className="text-center m-3">Today's student attendence.</p>
      <BarChart width={800} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="present" fill="#10B981" />
        <Bar dataKey="absent" fill="#FCD34D" />
      </BarChart>
    </div>
  );
}

export default AttendenceChart;
