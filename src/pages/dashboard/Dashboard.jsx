import React from "react";
import SideBar from "../../components/dashboard/SideBar";
import Header from "../../components/dashboard/Header";

export default function Dashboard() {
  return (
    <div
      className="dashboardPageContainer flex min-h-screen ">
      <SideBar />
      <main className="flex-1 min-w-0">
        <Header />
      </main>
    </div>
  );
}
