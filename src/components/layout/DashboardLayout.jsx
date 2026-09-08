import React from "react";
import SideBar from "../dashboard/SideBar";
import Header from "../dashboard/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="dashboardPageContainer flex min-h-screen">

      <SideBar />

      <main className="flex-1 min-w-0">

        <Header />

        <div className="mx-auto w-full max-w-[1600px] px-6 py-8">
          <Outlet/>
        </div>

      </main>

    </div>
  );
}