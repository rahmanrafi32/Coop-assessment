import React from "react";
import { useSelector } from "react-redux";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

function AssignmentAssessmentChart() {
  const data = useSelector(
    (state) => state.teacherDashboardData.assignmentAssessment
  );
  return (
    <div style={{ width: "100%" }} className="mt-5">
      <h4 className="text-center mb-5 text-primary">
        Assignment completion trends...
      </h4>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#F472B6" fill="#F9A8D4" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AssignmentAssessmentChart;
