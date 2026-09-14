import React from "react";

export default function HighlightingCards() {
  return (
    <div className="HighlightingCardsContainer border border-[#1E293B] w-full bg-[#0D131D]">
      <div className="highlightingCardWrapper flex w-345 mx-auto justify-between py-6 px-3.5">
        <div className="card  flex gap-3 p-6 items-center ">
          <div className=" w-15 h-15 flex items-center justify-center rounded-lg bg-purple-700/30"><i class="fa-solid fa-bolt-lightning text-[20px] text-purple-400"></i></div>
          <div className="info flex flex-col gap-0.5 w-35">
            <h3 className="text-[14px] font-semibold ">AI-Powered</h3>
            <p className="text-[12px] font-medium text-[#94A3B8]">Create high-quality content in seconds.</p>
          </div>
        </div>
        <div className="w-0.5 bg-[#1E293B]"></div>
        <div className="card  flex gap-3 p-6 items-center">
          <div className=" w-15 h-15 flex items-center justify-center rounded-lg bg-purple-700/30"><i class="fa-regular fa-calendar text-[20px] text-purple-400"></i></div>
          <div className="info flex flex-col gap-0.5 w-35">
            <h3 className="text-[14px] font-semibold ">Plan & Schedule</h3>
            <p className="text-[12px] font-medium text-[#94A3B8]">Organize and schedule content effortlessly.</p>
          </div>
        </div>
        <div className="w-0.5  bg-[#1E293B]"></div>
        <div className="card  flex gap-3 p-6 items-center">
          <div className=" w-15 h-15 flex items-center justify-center rounded-lg bg-purple-700/30"><i class="fa-solid fa-chart-simple text-[20px] text-purple-400"></i></div>
          <div className="info flex flex-col gap-0.5 w-35">
            <h3 className="text-[14px] font-semibold ">Analyze & Optimize</h3>
            <p className="text-[12px] font-medium text-[#94A3B8]">Track performance and improve results.</p>
          </div>
        </div> 
        <div className="w-0.5  bg-[#1E293B]"></div>
        <div className="card  flex gap-3 p-6 items-center">
          <div className=" w-15 h-15 flex items-center justify-center rounded-lg bg-purple-700/30"><i class="fa-solid fa-user-group text-[20px] text-purple-400"></i></div>
          <div className="info flex flex-col gap-0.5 w-35">
            <h3 className="text-[14px] font-semibold ">Team Collaboration</h3>
            <p className="text-[12px] font-medium text-[#94A3B8]">Work together and scale your content</p>
          </div>
        </div>
        <div className="w-0.5  bg-[#1E293B]"></div>
      </div>
    </div>
  );
}
