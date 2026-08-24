import React from "react";
import logoImg from "../../assets/New folder/logoimage.png"
import AICreditsCard from "./AICreditsCard";


export default function () {
    
  return (

    <div className="sideBarContainer  border-white w-[20%]  bg-[#0A0F18] flex flex-col  py-3 px-6.5 ">
      <div className="topContainer">
        <div className="logoContainer flex  gap-2 items-center p-2.5">
        <div className="imgBox w-10 h-10 flex items-center justify-center">
          <img src={logoImg} alt="logoImage" />
        </div>
        <div className="nameBox">
          <h2 className=" text-2xl font-bold text-white">ContentPilot AI</h2>
        </div>
      </div>
      <hr className="my-2.5 border border-[#1E293B]  "/>
      <div className="LandingsContainer flex flex-col gap-4 py-2.5 px-3.5 ">
        <div className="landingLinksBox flex gap-2 items-center hover:bg-[#8B5CF6] p-2.5 rounded-lg ">
          <i class="fa-solid fa-border-all text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Dashboard</a>
        </div>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-[#8B5CF6] p-2.5 rounded-lg ">
          <i class="fa-solid fa-pen text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Ai Writer</a>
        </div>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-[#8B5CF6] p-2.5 rounded-lg ">
          <i class="fa-regular fa-calendar-days text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Content Calendar</a>
        </div>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-[#8B5CF6] p-2.5 rounded-lg ">
          <i class="fa-solid fa-chart-line text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Analytics</a>
        </div>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-[#8B5CF6] p-2.5 rounded-lg ">
          <i class="fa-regular fa-file-lines text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Template</a>
        </div>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-[#8B5CF6] p-2.5 rounded-lg ">
          <i class="fa-solid fa-user-group text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Team Workspace</a>
        </div>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-[#8B5CF6] p-2.5 rounded-lg ">
          <i class="fa-regular fa-image text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Media Library</a>
        </div>
      </div>
      <hr  className="my-2.5 border border-[#1E293B]"/>
      <div className="toolsContainer flex flex-col gap-4 py-2.5 px-3.5 ">
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-[#8B5CF6]  rounded-lg ">
          <i class="fa-solid fa-gear text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Settings</a>
        </div>
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-[#8B5CF6] rounded-lg ">
          <i class="fa-solid fa-code-merge text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Integrations</a>
        </div>
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-[#8B5CF6]  rounded-lg ">
          <i class="fa-regular fa-credit-card text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Billing</a>
        </div>
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-[#8B5CF6]  rounded-lg ">
          <i class="fa-solid fa-circle-question text-[#94A3B8]"></i>
          <a className="text-[#94A3B8]" href="#">Help & Support</a>
        </div>
      </div>
      </div>
      <AICreditsCard/>
    </div>
  );
}
