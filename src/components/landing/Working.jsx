import React from "react";

export default function Working() {
  return (
    <div className="workingSectionContainer  w-345 mx-auto py-5 flex flex-col gap-3">
      <div className="TopInfoWrapper  flex flex-col gap-2 ">
        <div className="smallInfo flex gap-1.5 items-center w-27 rounded-lg p-1.5 bg-purple-600/30 text-purple-400">
          <i class="fa-solid fa-wand-magic-sparkles text-purple-400 text-[10px]"></i>
          <p className=" text-[10px]  ">HWO IT WORKS</p>
        </div>
        <div className="infoWrapper">
          <div className="headingWrapper">
            <h2 className="text-[18px] font-semibold ">
              From idea to impact in four simple steps.
            </h2>
          </div>
          <p className="text-[14px] text-[#94A3B8]">
            Everything you need to create, schedule, and grow - in one place.
          </p>
        </div>
      </div>
      <div className="bottomWorkingCardsWrapper flex items-center  p-2">
        <div className="workingCardsOuterContainer  w-90 min-h-40 py-8 px-3   relative  ">
          <div className="flex justify-between items-center pl-4">
            <hr className=" border-dashed border-purple-500 w-full   " />
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="cardInfoWrapper w-70 flex items-start gap-1 py-2 absolute top-3.5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-600 ">
              <p className="text-[18px] font-semibold text-black">01</p>
            </div>
            <div className="workCard  flex flex-col items-center gap-2 ">
              <div className="logoImgBox  w-16 h-16 flex items-center justify-center rounded-lg bg-[#1e1049]">
                <i class="fa-regular fa-lightbulb text-[32px] text-purple-400"></i>
              </div>
              <div className="cardInfo flex flex-col items-center">
                <h2 className="text-[16px] font-semibold">Generate Ideas</h2>
                <p className="text-center w-40 text-[14px] text-[#94A3B8]">
                  Get fresh, relevant ideas with Al;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="workingCardsOuterContainer  w-90 min-h-40 py-8 px-3    relative  ">
          <div className="flex justify-between items-center">
            <hr className=" border-dashed border-purple-500 w-full  " />
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="cardInfoWrapper w-70 flex items-start gap-1 py-2 absolute top-3.5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-600 ">
              <p className="text-[18px] font-semibold text-black">02</p>
            </div>
            <div className="workCard  flex flex-col items-center gap-2 ">
              <div className="logoImgBox  w-16 h-16 flex items-center justify-center rounded-lg bg-[#1e1049]">
                <i class="fa-regular fa-file-lines text-[32px] text-purple-400"></i>
              </div>
              <div className="cardInfo flex flex-col items-center">
                <h2 className="text-[16px] font-semibold">Create Content</h2>
                <p className="text-center w-40 text-[14px] text-[#94A3B8]">
                  Write, edit, and optimize in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="workingCardsOuterContainer  w-90 min-h-40 py-8 px-3    relative  ">
          <div className="flex justify-between items-center">
            <hr className=" border-dashed border-purple-500 w-full  " />
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="cardInfoWrapper w-70 flex items-start gap-1 py-2 absolute top-3.5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-600 ">
              <p className="text-[18px] font-semibold text-black">03</p>
            </div>
            <div className="workCard  flex flex-col items-center gap-2 ">
              <div className="logoImgBox  w-16 h-16 flex items-center justify-center rounded-lg bg-[#1e1049]">
                <i class="fa-regular fa-calendar text-[32px] text-purple-400"></i>
              </div>
              <div className="cardInfo flex flex-col items-center">
                <h2 className="text-[16px] font-semibold">Plan & Schedule</h2>
                <p className="text-center w-40 text-[14px] text-[#94A3B8]">
                  Schedule across all your platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="workingCardsOuterContainer  w-90 min-h-40 py-8  px-3   relative  ">
          <div className="flex justify-between items-center">
            <hr className=" border-dashed border-purple-500 w-full  " />
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="cardInfoWrapper w-70 flex items-start gap-1 py-2 absolute top-3.5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-600 ">
              <p className="text-[18px] font-semibold text-black">04</p>
            </div>
            <div className="workCard  flex flex-col items-center gap-2 ">
              <div className="logoImgBox  w-16 h-16 flex items-center justify-center rounded-lg bg-[#1e1049]">
               <i class="fa-solid fa-chart-simple text-[32px] text-purple-400"></i>
              </div>
              <div className="cardInfo flex flex-col items-center">
                <h2 className="text-[16px] font-semibold">Analyze & Grow</h2>
                <p className="text-center w-40 text-[14px] text-[#94A3B8]">
                  Track performance and improve continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
