import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

import { contentDistribution } from "../../data/dashboard";

export default function DistributionPieChart() {
  return (
<div className="contentDistributionMainContainer   bg-[#0D131D]  rounded-xl px-3.5">
    <div className="topContainer  flex items-center gap-2 p-2">
        <h2>Content Distribution</h2>
        <i class="fa-solid fa-circle-info"></i>
      </div>
<div className="contentPieChartWrapper flex p-3 ">
<div className="DistributionPieChartContainer  w-45 shrink-0 p-2.5">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={contentDistribution}
            dataKey="posts"
            nameKey="name"
            innerRadius={55}
            outerRadius={80}
            startAngle={100}
            endAngle={-270}
            shape={(props) => <Sector {...props} fill={props.payload.color} stroke="none" />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="pieChartInfoContainer  flex p-2.5  ">
        <div className="infoBox flex flex-col  justify-around">
            {contentDistribution.map((content)=>(
             <>
            <div className="infoCard flex gap-4 justify-between">
                <div className="platformInfoBox flex items-center gap-2" >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: content.color }}></div>
                    <div>{content.platform}</div>
                   </div>
            <div className="percentageInfoBox flex  ">
            <p>{content.posts}</p>
            <p>({content.percentage}%)</p>
            </div>
            </div>
             </>
                
            ))}
        </div>
    </div>
      </div>
     
</div>

   
  );
}
