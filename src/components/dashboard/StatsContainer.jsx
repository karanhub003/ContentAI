import React from "react";
import { dashboardStats } from "../../data/dashboard";
import StatCard from "./StatCard";

export default function StatsContainer() {
  // console.log(dashboardStats);
  return (
    <div className="statsCardWrapperContainer border  flex items-center p-2.5">
      {dashboardStats.map((stats) => (
        <StatCard key={stats.id} stats={stats} />
      ))}
    </div>
  );
}
