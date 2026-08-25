import React from "react";

export default function TopPerformingCards({topContent}) {
  return (
    <div className="performingCardContainer flex justify-between ">
     <div className="leftSideContainer flex gap-4.5 ">
       <img className=" w-20 h-20 rounded-xl" src={topContent.image} alt="contentImg" />
      <div className="contentInfo flex flex-col gap-2 justify-center w-50">
        <p className="text-[14px] ">{topContent.title}</p>
        <div className="timePlaceInfo flex gap-2.5 items-center  ">
          <p className="text-[12px] text-[#94A3B8]">{topContent.date}</p>
          
          <p className="text-[12px] text-[#94A3B8]">{topContent.platform}</p>
        </div>
      </div>
     </div>
      
      <div className="contentPerformanceInfo flex gap-3  items-center">
        <div className="reachBox flex flex-col items-center">
          <h2 >{topContent.reach}</h2>
          <p className="text-[12px] font-medium text-[#94A3B8]">Reach</p>
        </div>
        <div className="engagementBox flex flex-col items-center">
          <h2>{topContent.engagement}</h2>
          <p className="text-[12px] font-medium text-[#94A3B8]">Engagement</p>
        </div>
      </div>
    </div>
  );
}
