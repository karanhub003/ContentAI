import React from "react";
import logoImg from "../../assets/New folder/logoimage.png";
import AICreditsCard from "./AICreditsCard";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function () {
  const { logout } = useContext(AuthContext);
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "fa-border-all",
    },
    {
      name: "AI Writer",
      path: "/ai-writer",
      icon: "fa-pen",
    },
    {
      name: "Content Calendar",
      path: "/calendar",
      icon: "fa-calendar-days",
    },
    {
      name: "Analytics",
      path: "/under-development-analytics",
      icon: "fa-chart-pie",
    },
    {
      name: "Templates",
      path: "/template",
      icon: "fa-file-lines",
    },
    {
      name: "Team Work",
      path: "/under-development-teamwork",
      icon:"fa-users"
    },
  ];

  return (
    <div className="sideBarContainer  w-71.5 shrink-0  bg-[#0A0F18] flex flex-col  py-3 px-5  border-r border-[#1E293B] ">
      <div className="topContainer">
        <div className="logoContainer flex  gap-2 items-center p-2.5">
          <div className="imgBox w-10 h-10 flex items-center justify-center">
            <img src={logoImg} alt="logoImage" />
          </div>
          <div className="nameBox">
            <h2 className=" text-[20px] font-bold text-white">
              ContentPilot AI
            </h2>
          </div>
        </div>
        <hr className="my-2.5 border border-[#1E293B]  " />
        <div className="LandingsContainer flex flex-col gap-4 py-2.5 px-3.5 ">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex gap-2 items-center p-2.5 rounded-lg group cursor-pointer ${isActive ? "bg-linear-to-r from-purple-700/25 to-purple-900/5" : "text-[#94A3B8] hover:bg-white/5 hover:text-white"}`
              }
            >
              <i
                className={`fa-solid ${item.icon} text-[#94A3B8] group-hover:text-[white]`}
              ></i>
              <span className="text-[#94A3B8] group-hover:text-[white]">
                {item.name}
              </span>
            </NavLink>
          ))}

          <div className="landingLinksBox flex gap-2 items-center hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 p-2.5 rounded-lg group cursor-pointer  ">
            <i class="fa-regular fa-image text-[#94A3B8] group-hover:text-[white]"></i>
            <span className="text-[#94A3B8] group-hover:text-[white]">
              Media Library
            </span>
          </div>
        </div>
        <hr className="my-2.5 border border-[#1E293B]" />
        <div className="toolsContainer flex flex-col gap-4 py-2.5 px-3.5 ">
          <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5  rounded-lg group cursor-pointer  ">
            <i class="fa-solid fa-gear text-[#94A3B8] group-hover:text-[white]"></i>
            <span className="text-[#94A3B8] group-hover:text-[white]">
              Settings
            </span>
          </div>
          <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5 rounded-lg group cursor-pointer  ">
            <i class="fa-solid fa-code-merge text-[#94A3B8] group-hover:text-[white]"></i>
            <span className="text-[#94A3B8] group-hover:text-[white]">
              Integrations
            </span>
          </div>
          <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5  rounded-lg group cursor-pointer  ">
            <i class="fa-regular fa-credit-card text-[#94A3B8] group-hover:text-[white]"></i>
            <span className="text-[#94A3B8] group-hover:text-[white]">
              Billing
            </span>
          </div>
          <div className="toolsLinkBox flex gap-2 items-center p-2.5 hover:bg-linear-to-r from-purple-700/25 to-purple-900/5  rounded-lg group cursor-pointer  ">
            <i class="fa-solid fa-circle-question text-[#94A3B8] group-hover:text-[white]"></i>
            <span className="text-[#94A3B8] group-hover:text-[white]">
              Help & Support
            </span>
          </div>
          <div className="toolsLinkBox flex gap-2 items-center p-2.5 rounded-lg group cursor-pointer  ">
            <button
              onClick={logout}
              className="cursor-pointer border hover:bg-purple-900 hover:border-purple-300  border-purple-800 w-full text-center p-1.5 bg-purple-500 rounded-xl text-[18px] font-semibold "
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <AICreditsCard />
    </div>
  );
}
