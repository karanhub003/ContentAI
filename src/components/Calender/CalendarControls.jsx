import React from "react";

export default function CalendarControls() {
  return (
    <div className="CalendarControlsContainer border border-[#1E293B]  flex justify-between items-center p-4 bg-[#0D131D] rounded-lg mt-5">
      <div className="leftSideContainer  flex gap-4 items-center">
        <button className="dayBox rounded-lg border border-[#1E293B] bg-[#0D131D] px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033]">Today</button>
       <div className="buttonWrapper flex items-center gap-2">
         <button className="backForwardBtn rounded-lg border border-[#1E293B] bg-[#0D131D] px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="backForwardBtn rounded-lg border border-[#1E293B] bg-[#0D131D] px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
       </div>
        <button className="font-bold">
          May 2024 <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div className="rightSideContainer flex items-center gap-4">
        <div className="channelsContainer flex rounded-lg border border-[#1E293B]   px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033] gap-3.5">
          <div className="infoChannel">
            <p>
              <i class="fa-solid fa-globe"></i> All channels
            </p>
          </div>
          <div className="dorpIcon">
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="settingsBox rounded-lg border border-[#1E293B] bg-[#0D131D] px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033]">
            <p><i class="fa-solid fa-gear"></i> View Settings</p>
        </div>
      </div>
    </div>
  );
}
