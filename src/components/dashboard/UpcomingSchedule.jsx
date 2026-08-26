import React from "react";
import {upcomingSchedule} from '../../data/dashboard'
import Button from "../common/Button";
export default function UpcomingSchedule() {
  return (
<div className="UpcomingScheduleContainer bg-[#0D131D]  rounded-xl p-2.5 flex flex-col gap-5.5 ">
      <div className="scheduleHeader flex items-center justify-between">

        <div className="flex items-center gap-2.5">
            <h2>Upcoming Schedule</h2>

            <i
                className="fa-solid fa-circle-info text-[#94A3B8]"
            ></i>
        </div>

        <Button variant="outline">View all</Button>

    </div>
    <div className="scheduleContentWrapper">
            <div className="scheduleCard flex flex-col gap-5">
                {
                    upcomingSchedule.map((upcomingContent)=>(
                      <>
                        <div className="scheduleCardBox grid grid-cols-[65px_minmax(0,1fr)_85px] gap-2">
                          <div className="dateTimeBoxv flex flex-col text-[12px] text-[#94A3B8] ">
                            <p>{upcomingContent.time}</p>
                            <p>{upcomingContent.date}</p>
                            
                          </div>
                          <div className="infoBox min-w-0"> 
                            <p className="wrap-break-word text-sm text-white leading-5">{upcomingContent.title}</p>
                          
                          </div>
                          <div className="statusCardBox whitespace-nowrap">
                            <span className="text-xs px-2 py-1 rounded-md bg-[#172B48] text-[#60A5FA] whitespace-nowrap">{upcomingContent.status}</span>
                          </div>
                        </div>
                      
                      </>
                    ))
                }
            </div>
        </div>
</div>
         
       
  );
}
