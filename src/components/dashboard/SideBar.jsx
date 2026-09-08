import React from "react";
import logoImg from "../../assets/New folder/logoimage.png"
import AICreditsCard from "./AICreditsCard";
import { NavLink } from "react-router-dom";


export default function () {
    
  return (

    <div className="sideBarContainer  w-71.5 shrink-0  bg-[#0A0F18] flex flex-col  py-3 px-5  border-r border-[#1E293B] ">
      <div className="topContainer">
        <div className="logoContainer flex  gap-2 items-center p-2.5">
        <div className="imgBox w-10 h-10 flex items-center justify-center">
          <img src={logoImg} alt="logoImage" />
        </div>
        <div className="nameBox">
          <h2 className=" text-[20px] font-bold text-white">ContentPilot AI</h2>
        </div>
      </div>
      <hr className="my-2.5 border border-[#1E293B]  "/>
      <div className="LandingsContainer flex flex-col gap-4 py-2.5 px-3.5 ">
        <NavLink to="/dashboard" className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg group cursor-pointer  ">
          <i class="fa-solid fa-border-all text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Dashboard</span>
        </NavLink>
        <NavLink to="/ai-writer" className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg group cursor-pointer  ">
          <i class="fa-solid fa-pen text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Ai Writer</span>
        </NavLink>
        <NavLink to="/calendar" className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg group cursor-pointer  ">
          <i class="fa-regular fa-calendar-days text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Content Calendar</span>
        </NavLink>
        <NavLink className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg group cursor-pointer  ">
          <i class="fa-solid fa-chart-line text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Analytics</span>
        </NavLink>
        <NavLink to="/template" className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg cursor-pointer group  ">
          <i class="fa-regular fa-file-lines text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Template</span>
        </NavLink>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg group cursor-pointer  ">
          <i class="fa-solid fa-user-group text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Team Workspace</span>
        </div>
        <div className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg group cursor-pointer  ">
          <i class="fa-regular fa-image text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Media Library</span>
        </div>
      </div>
      <hr  className="my-2.5 border border-[#1E293B]"/>
      <div className="toolsContainer flex flex-col gap-4 py-2.5 px-3.5 ">
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5  rounded-lg group cursor-pointer  ">
          <i class="fa-solid fa-gear text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Settings</span>
        </div>
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 rounded-lg group cursor-pointer  ">
          <i class="fa-solid fa-code-merge text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Integrations</span>
        </div>
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5  rounded-lg group cursor-pointer  ">
          <i class="fa-regular fa-credit-card text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Billing</span>
        </div>
        <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5  rounded-lg group cursor-pointer  ">
          <i class="fa-solid fa-circle-question text-[#94A3B8] group-hover:text-[white]"></i>
          <span className="text-[#94A3B8] group-hover:text-[white]" href="#">Help & Support</span>
        </div>
      </div>
      </div>
      <AICreditsCard/>
    </div>
  );
}
