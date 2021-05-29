import React from "react";
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
  const data = [
    {
      name: "1st",
      present: 80,
      absent: 24,
    },
    {
      name: "2nd",
      present: 60,
      absent: 30,
    },
    {
      name: "3rd",
      present: 68,
      absent: 20,
    },
    {
      name: "4th",
      present: 50,
      absent: 40,
    },
    {
      name: "5th",
      present: 70,
      absent: 30,
    },
    {
      name: "6th",
      present: 60,
      absent: 40,
    },
    {
      name: "7th",
      present: 90,
      absent: 10,
    },
    {
      name: "8th",
      present: 70,
      absent: 50,
    },
  ];
  return (
    <div class="table-responsive">
      <p class="text-center m-3">Today's student attendence.</p>
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
