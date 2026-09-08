import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

import { contentDistribution } from "../../data/dashboard";

export default function DistributionPieChart() {
  return (
<div className="contentDistributionMainContainer   bg-[#0D131D]  rounded-xl p-2.5 flex flex-col gap-3">
    <div className="topContainer  flex items-center gap-2 pt-2  ">
        <h2 className="text-[20px]">Content Distribution</h2>
        <i class="fa-solid fa-circle-info"></i>
      </div>
<div className="contentPieChartWrapper flex items-center gap-5  ">
<div className="DistributionPieChartContainer  w-[40%] shrink-0  relative">
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={contentDistribution}
            dataKey="posts"
            nameKey="name"
            innerRadius={40}
            outerRadius={60}
            startAngle={100}
            endAngle={-270}
            shape={(props) => <Sector {...props} fill={props.payload.color} stroke="none" />}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="postbox absolute top-17.5 left-11.5 text-center">
                <p className=' font-semibold '>128</p>
                <p className=' font-semibold text-[10px] text-[#94A3B8]'>Total Posts</p>
            </div>
    </div>
    <div className="pieChartInfoContainer   flex-1 min-w-0   ">
        <div className="infoBox flex flex-col  gap-4 ">
            {contentDistribution.map((content)=>(
             <>
            <div className="infoCard flex gap-4 justify-between">
                <div className="platformInfoBox flex items-center gap-2" >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: content.color }}></div>
                    <div className="text-[12px]">{content.platform}</div>
                   </div>
            <div className="percentageInfoBox flex  ">
            <p className="text-[12px] text-[#94A3B8]">{content.posts}</p>
            <p className="text-[12px] text-[#94A3B8]">({content.percentage}%)</p>
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
