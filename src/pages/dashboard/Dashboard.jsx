import React from "react";
import SideBar from "../../components/dashboard/SideBar";
import Header from "../../components/dashboard/Header";
import StatsContainer from "../../components/dashboard/StatsContainer";
import GreetingCard from "../../components/dashboard/GreetingCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import TopPerformingContent from "../../components/dashboard/TopPerformingContent";
import DistributionPieChart from "../../components/dashboard/DistributionPieChart";
import UpcomingSchedule from "../../components/dashboard/UpcomingSchedule";

export default function Dashboard() {
  return (
    <div className="dashboardPageContainer flex min-h-screen ">
      <SideBar />
  <main className="flex-1 min-w-0 ">
        <Header />
    <div className="mx-auto w-full max-w-[1600px] px-6 py-8">
          <GreetingCard />
          <StatsContainer />
          <div className="ContentMainContainer grid grid-cols-[1.5fr_1fr] gap-5  mt-6">
            <AnalyticsChart/>
            <TopPerformingContent/>
          </div>
          <div className="distributionContainer w-full  grid grid-cols-[repeat(3,1fr)] mt-6 ">
            <DistributionPieChart/>
            <UpcomingSchedule/>
          </div>
        </div>
      </main>
    </div>
  );
}
