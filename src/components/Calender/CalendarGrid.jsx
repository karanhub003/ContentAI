import React from "react";
import { calendarDays,calendarEvents } from "../../data/calendar";


import CalendarEvent from "./CalendarEvent";
export default function CalendarGrid() {
  return (
    <div className="calendarGridContainer overflow-hidden rounded-xl border border-[#1E293B] bg-[#0D131D]">
      <div className="grid grid-cols-7 border-b border-[#1E293B]">
        <div className="p-3 text-center text-sm text-[#94A3B8]">Sun</div>

        <div className="p-3 text-center text-sm text-[#94A3B8]">Mon</div>

        <div className="p-3 text-center text-sm text-[#94A3B8]">Tue</div>

        <div className="p-3 text-center text-sm text-[#94A3B8]">Wed</div>

        <div className="p-3 text-center text-sm text-[#94A3B8]">Thu</div>

        <div className="p-3 text-center text-sm text-[#94A3B8]">Fri</div>

        <div className="p-3 text-center text-sm text-[#94A3B8]">Sat</div>
      </div>
      <div className="dateBox grid grid-cols-7 ">
        {
            calendarDays.map((day,index)=>{
                const event= calendarEvents.find((event)=> event.date===day)
                return(
                <div key={index} className="min-h-26.25  border-r border-b border-[#1E293B] py-3 px-1">
                    <span className="text-sm text-white">{day}</span>


                   { 
                    event &&(
                        <CalendarEvent event={event}/>
                    )
                   }     

                </div>

                )

            })
        


        
        }
      </div>
    </div>
  );
}
