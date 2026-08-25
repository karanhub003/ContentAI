import React from "react";
import {upcomingSchedule} from '../../data/dashboard'
import Button from "../common/Button";
export default function UpcomingSchedule() {
  return (
<div className="UpcomingScheduleContainer ">
       <div className="infoBox flex items-center gap-2.5">
        <h2>Upcoming Schedule </h2>
        <i class="fa-solid fa-circle-info text-[#94A3B8]"></i>
          </div>
            <Button>View all</Button>
    <div className="scheduleContentWrapper">
            <div className="scheduleCard">
                {
                    
                }
            </div>
        </div>
</div>
         
       
  );
}
