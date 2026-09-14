import React from "react";

export default function Problem() {
  return (
    <div className="problemSectionContainer border w-345 mx-auto py-5">
      <div className="TopInfoWrapper border flex justify-between items-center">
        <div className="leftSideWrapper">
          <div className="smallInfo flex gap-1.5 items-center w-27 rounded-lg p-1.5 bg-purple-600/30 text-purple-400">
            <i class="fa-solid fa-wand-magic-sparkles text-purple-400 text-[10px]"></i>
            <p className=" text-[10px]  ">THE PROBLEM</p>
          </div>
          <div className="headingWrapper">
            <h2 className="text-[18px] font-semibold ">Content creation is hard.</h2>
            <h2 className="text-[18px] font-semibold text-purple-500">We make it simple.</h2>
          </div>
          <p className="text-[14px] text-[#94A3B8]">
            Creating consistent, high-quality content takes time, effort, and
            the right tools. Most creators and teams struggle with:-
          </p>
        </div>
        <div className="rightSideWrapper  flex flex-col items-center -rotate-15  p-2.5">
          <div className="subLiner text-center  ">
            <p className="text-[14px] font-bold text-purple-400">More Content</p>
            <p className="text-[14px] font-bold text-purple-400">Less Stress</p>
          </div>
          <i class="fa-solid fa-arrow-turn-down rotate-70"></i>
        </div>
      </div>
      <div className="problemCardWrapper border flex">
        <div className="problemCard">
          <div>
            <i class="fa-regular fa-lightbulb"></i>
          </div>
          <h3>Running out of ideas</h3>
          <p>It's hard to always know what to post neut.</p>
        </div>
        <div className="problemCard">
          <div>
            <i class="fa-solid fa-screwdriver-wrench"></i>
          </div>
          <h3>Juggling multiple tools</h3>
          <p>Writing, scheduling. and analytics are scattered.</p>
        </div>
        <div className="problemCard">
          <div>
            <i class="fa-regular fa-file"></i>
          </div>
          <h3>Inconsistent posting</h3>
          <p>Busy scheduler lead to missed opportunities.</p>
        </div>
        <div className="problemCard">
          <div>
            <i class="fa-solid fa-flag-checkered"></i>
          </div>
          <h3>Tracking what works</h3>
          <p>It's difficult to measure real impact.</p>
        </div>
      </div>
    </div>
  );
}
