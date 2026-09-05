import React from "react";
import {upcomingContent} from '../../data/calendar'
import Button from "../common/Button";

export default function UpcomingContent() {
  return (
    <div className="UpcomingContentContainer  bg-[#0D131D]  rounded-xl p-5 flex flex-col gap-3.5 ">
      <div className="scheduleHeader flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <h2>Upcoming Content</h2>

          <i className="fa-solid fa-circle-info text-[#94A3B8]"></i>
        </div>

        <Button variant="outline">View all</Button>
      </div>
      <div className="scheduleContentWrapper">
        <div className="scheduleCard flex flex-col  ">
          {upcomingContent.map((upcomingContent) => (
            <>
              <div className="scheduleCardBox flex  justify-between  py-3.5 ">
              <div className="leftSideWrapper flex gap-3">
                  <div className="logoBox w-10   ">
                   <img src={upcomingContent.image} alt={upcomingContent.imageAlt}/>
                </div>
                <div className="infoBox flex flex-col gap-1.5 ">
                  <p className=" text-[12px] text-white font-semibold">
                    {upcomingContent.title}
                  </p>
                  <p className="text-[10px] text-[#CBD5E1]">{upcomingContent.platform}</p>
                </div>
              </div>
                <div className="statusCardBox whitespace-nowrap">
                  <p className="text-[12px]">{upcomingContent.date}</p>
                  <p className="text-[12px] text-right">{upcomingContent.time}</p>
                </div>
              </div>
              <hr className="border-[#1E293B]" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
