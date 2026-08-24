import React from "react";
import SideBar from "../../components/dashboard/SideBar";
import Header from "../../components/dashboard/Header";

export default function Dashboard() {
  return (
    <div
      className="dashboardPageContainer flex w-full ">
      <SideBar />
      <main>
        <Header />
        <div>
          <h2>KAran SIngh</h2>
        </div>
      </main>
    </div>
  );
}
