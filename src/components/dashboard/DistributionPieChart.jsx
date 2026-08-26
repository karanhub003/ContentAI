import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

import { contentDistribution } from "../../data/dashboard";

export default function DistributionPieChart() {
  return (
<div className="contentDistributionMainContainer   bg-[#0D131D]  rounded-xl p-2.5">
    <div className="topContainer  flex items-center gap-2 pt-2  ">
        <h2>Content Distribution</h2>
        <i class="fa-solid fa-circle-info"></i>
      </div>
<div className="contentPieChartWrapper flex items-center  ">
<div className="DistributionPieChartContainer  w-[45%] shrink-0 ">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={contentDistribution}
            dataKey="posts"
            nameKey="name"
            innerRadius={45}
            outerRadius={65}
            startAngle={100}
            endAngle={-270}
            shape={(props) => <Sector {...props} fill={props.payload.color} stroke="none" />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="pieChartInfoContainer   flex-1 min-w-0   ">
        <div className="infoBox flex flex-col  gap-4 ">
            {contentDistribution.map((content)=>(
             <>
            <div className="infoCard flex gap-4 justify-between">
                <div className="platformInfoBox flex items-center gap-2" >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: content.color }}></div>
                    <div className="text-[14px]">{content.platform}</div>
                   </div>
            <div className="percentageInfoBox flex  ">
            <p className="text-[14px] text-[#94A3B8]">{content.posts}</p>
            <p className="text-[14px] text-[#94A3B8]">({content.percentage}%)</p>
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
