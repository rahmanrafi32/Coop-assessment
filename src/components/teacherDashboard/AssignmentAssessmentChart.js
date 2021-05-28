import React, { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Semester 1",

    pv: 70,
  },
  {
    name: "Semester 2",

    pv: 50,
  },
  {
    name: "Semester 3",

    pv: 90,
  },
  {
    name: "Semester 4",

    pv: 60,
  },
  {
    name: "Semester 5",

    pv: 70,
  },
  {
    name: "Semester 6",

    pv: 80,
  },
  {
    name: "Semester 7",

    pv: 70,
  },
  {
    name: "Semester 8",

    pv: 60,
  },
];

export default class AssignmentAssessmentChart extends PureComponent {
  render() {
    return (
      <div style={{ width: "100%" }} class="mt-5">
        <h4 class="text-center mb-5 text-primary">
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
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#F472B6"
              fill="#F9A8D4"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
