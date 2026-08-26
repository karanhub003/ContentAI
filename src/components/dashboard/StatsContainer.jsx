import React from "react";
import { dashboardStats } from "../../data/dashboard";
import StatCard from "./StatCard";

export default function StatsContainer() {
  // console.log(dashboardStats);
  return (
    <div className="statsCardWrapperContainer mt-6  grid grid-cols-5 items-center gap-5 ">
      {dashboardStats.map((stats) => (
        <StatCard key={stats.id} stats={stats} />
      ))}
    </div>
  );
}
