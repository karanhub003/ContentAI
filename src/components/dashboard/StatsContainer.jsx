import React from "react";
import { dashboardStats } from "../../data/dashboard";
import StatCard from "./StatCard";

export default function StatsContainer() {
  // console.log(dashboardStats);
  return (
    <div className="statsCardWrapperContainer mt-6  flex items-center  justify-between">
      {dashboardStats.map((stats) => (
        <StatCard key={stats.id} stats={stats} />
      ))}
    </div>
  );
}
