import React from "react";
import Header from "../../components/Template/Header";
import Navigator from "../../components/Template/Navigator";
import TemplateGrid from "../../components/Template/TemplateGrid";
import AllTemplate from "../../components/Template/AllTemplate";
import TemplateCategories from "../../components/Template/TemplateCategories";
import TemplateUsageChart from "../../components/Template/TemplateUsageChart";
import CustomTemplate from "../../components/Template/CustomTemplate";
import ProTips from "../../components/Template/ProTips";

export default function Template() {
  return (
    <div className="templateContainer">
      <div className="topContainer flex flex-col gap-8">
        <Header />
        <Navigator />
      </div>
      <div className="contentContainer grid grid-cols-[1fr_315px] gap-2.5 ">
        <main className="flex flex-col gap-11.75">
          <TemplateGrid />
          <AllTemplate />
          <ProTips/>
        </main>
        <sidebar className="flex flex-col gap-3">
          <div className="div flex justify-end">
            <TemplateCategories />
          </div>
          <TemplateUsageChart />
          <CustomTemplate/>
        </sidebar>
      </div>
    </div>
  );
}
