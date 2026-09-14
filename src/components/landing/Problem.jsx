import React from "react";

export default function Problem() {
  return (
    <div className="problemSectionContainer  w-345 mx-auto py-5 flex flex-col gap-3">
      <div className="TopInfoWrapper  flex justify-between items-center ">
        <div className="leftSideWrapper flex flex-col gap-3">
          <div className="smallInfo flex gap-1.5 items-center w-27 rounded-lg p-1.5 bg-purple-600/30 text-purple-400">
            <i class="fa-solid fa-wand-magic-sparkles text-purple-400 text-[10px]"></i>
            <p className=" text-[10px]  ">THE PROBLEM</p>
          </div>
          <div className="infoWrapper">
            <div className="headingWrapper">
            <h2 className="text-[18px] font-semibold ">Content creation is hard.</h2>
            <h2 className="text-[18px] font-semibold text-purple-500">We make it simple.</h2>
          </div>
          <p className="text-[14px] text-[#94A3B8]">
            Creating consistent, high-quality content takes time, effort, and
            the right tools. Most creators and teams struggle with:-
          </p>
          </div>
        </div>
        <div className="rightSideWrapper  flex flex-col items-center gap-2.5 -rotate-15  p-2.5">
          <div className="subLiner text-center  ">
            <p className="text-[20px] font-bold text-purple-400">More Content</p>
            <p className="text-[20px] font-bold text-purple-400">Less Stress</p>
          </div>
          <i class="fa-solid fa-arrow-turn-down rotate-70 text-[24px]"></i>
        </div>
      </div>
      <div className="problemCardWrapper  flex justify-between items-center mt-3.5">
        <div className="problemCard border  border-[#1E293B] flex flex-col w-60 py-4 px-6  rounded-xl bg-[#0D131D] ">
          <div className="w-15 h-15 rounded-lg flex items-center justify-center bg-purple-700/30  mb-1.5">
            <i class="fa-regular fa-lightbulb text-[20px] text-purple-400"></i>
          </div>
          <h3 className="text-[14px] font-semibold">Running out of ideas</h3>
          <p className="text-[12px] text-[#94A3B8] font-medium">It's hard to always know what to post neut.</p>
        </div>
        <div className="problemCard border  border-[#1E293B] flex flex-col w-60 py-4 px-6 rounded-xl bg-[#0D131D] ">
          <div className="w-15 h-15 rounded-lg flex items-center justify-center bg-purple-700/30  mb-1.5">
            <i class="fa-solid fa-screwdriver-wrench text-[20px] text-purple-400"></i>
          </div>
          <h3 className="text-[14px] font-semibold">Juggling multiple tools</h3>
          <p className="text-[12px] text-[#94A3B8] font-medium">Writing, scheduling. and analytics are scattered.</p>
        </div>
        <div className="problemCard border  border-[#1E293B] flex flex-col w-60 py-4 px-6 rounded-xl bg-[#0D131D] ">
          <div className="w-15 h-15 rounded-lg flex items-center justify-center bg-purple-700/30  mb-1.5">
            <i class="fa-regular fa-file text-[20px] text-purple-400"></i>
          </div>
          <h3 className="text-[14px] font-semibold">Inconsistent posting</h3>
          <p className="text-[12px] text-[#94A3B8] font-medium">Busy scheduler lead to missed opportunities.</p>
        </div>
        <div className="problemCard border border-[#1E293B] flex flex-col w-60 py-4 px-6 rounded-xl bg-[#0D131D] ">
          <div className="w-15 h-15 rounded-lg flex items-center justify-center bg-purple-700/30  mb-1.5">
            <i class="fa-solid fa-flag-checkered text-[20px] text-purple-400"></i>
          </div>
          <h3 className="text-[14px] font-semibold">Tracking what works</h3>
          <p className="text-[12px] text-[#94A3B8] font-medium">It's difficult to measure real impact.</p>
        </div>
      </div>
    </div>
  );
}
