import React from "react";

import { trustedLogos } from "../../data/landingPage";

export default function TrustedTeams() {
  return (
    <div className="TrustedTeamsContainer  flex flex-col gap-2.5 w-345 mx-auto py-8 ">
      <div className="topWrapper flex  justify-between  items-center  ">
        <div className="leftSide w-120 flex flex-col gap-2.5">
          <div className="smallInfo flex gap-1.5 items-center w-50 rounded-lg p-1.5 bg-purple-600/30 text-purple-400">
          <i class="fa-solid fa-wand-magic-sparkles text-purple-400 text-[10px]"></i>
          <p className=" text-[10px]  ">
            TRUSTED BY CREATORS & TEAMS
          </p>
          </div>
          <div className="text-[24px] font-medium ">
            <h2 className="">Join thousands of creators, marketers</h2>  
             <h2 className="">and businesses growing with <span className="text-[24px] font-medium text-purple-500">Content AI.</span></h2>
          </div>
        </div>
        <div className="rightSIde border-l border-[#1E293B] py-2 pl-2.5 pr-1.5 text-[12px] text-[#94A3B8]">
          <p>From individual to global brands</p>
          <p>-everyone creates better nih AL</p>
        </div>
      </div>
      <div className="teamsLogoWrapper  flex justify-between items-center">
        {trustedLogos.map((logo, i) => (
          <div className="w-30">
            <img className="w-full" src={logo.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
