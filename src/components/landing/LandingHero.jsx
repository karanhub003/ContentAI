import React from "react";
import Button from "../common/Button";
import bundle from '../../assets/Auth Page/bundle.webp'

export default function LandingHero() {
  return (
    <div className="LandingHeroContainer grid grid-cols-[1fr_1.5fr] mt-5 items-center  ">
      <div className="leftSideContainer  flex flex-col gap-12 ">
      <div className="topSide flex flex-col gap-3">
          <p className=" text-[10px] w-45 rounded-lg text-center p-1.5 bg-purple-600/30 text-purple-400 ">
          <i class="fa-solid fa-wand-magic-sparkles text-purple-400"></i>AI-Powered Content
          Creation
        </p>

        <div className="heroHeadingSubHeadingWrapper  flex flex-col gap-3">
          <div className="heading">
            <h2 className="text-5xl font-semibold">Create. Plan. Publish.</h2>
            <h2 className="text-5xl font-semibold">Grow with <span className="text-purple-500">Al</span></h2>
          </div>
          <div className="subHeading">
            <p className="text-[12px] font-semibold text-[#94A3B8]" >
              Your all-in-one Al content platform to ideate, create, schedule,
            </p>
            <p className="text-[12px] font-semibold text-[#94A3B8]" > and analyze content co that drives real results.</p>
          </div>
        </div>
      </div>
       <div className="bottomSide flex flex-col gap-5">
         <div className="ctaBtnWrapper  flex gap-4 items-center">
            <Button variant="secondary" size="lg">Get started free</Button>
            <Button variant="outline" size="lg">Watch demo</Button>
        </div>
        <div className="bottomInfo  flex gap-3.5">
            <div className="div flex gap-1.5 items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <p className="text-[12px] text-[#94A3B8]">No credit card required</p>
            </div>
            <div className="div flex gap-1.5 items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <p className="text-[12px] text-[#94A3B8]">free forever plan</p>
            </div>
            <div className="div flex gap-1.5 items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <p className="text-[12px] text-[#94A3B8]">loved by 10K+ creators</p>
            </div>
        </div>
       </div>
      </div>
     
     
     
      <div className="rightSideContainer  ">
       <img src={bundle} alt="heroImg" /> 
      </div>
    </div>
  );
}
