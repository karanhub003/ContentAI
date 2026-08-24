import React from "react";
import SideBar from "../../components/dashboard/SideBar";
import Header from "../../components/dashboard/Header";
import StatsContainer from "../../components/dashboard/StatsContainer";
import GreetingCard from "../../components/dashboard/GreetingCard";

export default function Dashboard() {
  return (
    <div className="dashboardPageContainer flex min-h-screen ">
      <SideBar />
  <main className="flex-1 min-w-0 ">
        <Header />
    <div className="mx-auto w-full max-w-[1600px] px-6 py-8">
          <GreetingCard />
          <StatsContainer />
        </div>
      </main>
    </div>
  );
}
