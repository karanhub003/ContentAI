import React from "react";
import { contentPerformanceData } from "../../data/chartData";
import {
  Line,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
} from "recharts";

export default function AnalyticsChart() {
  console.log(contentPerformanceData);
  return (
    <div className="analyticsContainer w-[50%]  bg-[#0D131D]  rounded-xl ">
      <div className="topContainer  flex items-center gap-2 p-2">
        <h2>Content Performance</h2>
        <i class="fa-solid fa-circle-info"></i>
      </div>
      <div className="chartContainer   p-2 ">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={contentPerformanceData}>
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.28} />
                <stop offset="45%" stopColor="#8B5CF6" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={true}
            />
            <YAxis stroke="#64748B" tickLine={false} axisLine={false} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="reach"
              stroke="#8B5CF6"
              strokeWidth={2.5}
              fill="url(#purpleGradient)"
              dot={true}
              activeDot={{ r: 5 }}
            />
            <CartesianGrid stroke="#1E293B" opacity={0.3}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
