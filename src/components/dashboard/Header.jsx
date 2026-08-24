import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import demoImg from "../../assets/demoavatar.png";

export default function Header() {
  return (
    <div className="HeaderContainer  w-full py-2.5 px-3 border-b border-[#1E293B] ">
      <div className="navBar  flex justify-between items-center p-2">
        <div className="leftSideContainer flex items-center justify-center   gap-2.5 ">
          <div className="hamburgerIcon flex items-center justify-center">
            <i class="fa-solid fa-bars text-[20px]"></i>
          </div>
          <div className="searchBarContainer border border-[#1E293B] rounded-lg  py-1.5 px-2.5 w-75">
            <div className="searchWrapperBox flex items-center justify-center gap-2.5 w-full ">
              <div className="div flex items-center justify-center flex-0 ">
                <i class="fa-solid fa-magnifying-glass text-[14px]"></i>
              </div>
              <Input>Search anything...</Input>
            </div>
          </div>
        </div>
        <div className="rightSideContainer flex gap-5  items-center">
          <Button>
            <i class="fa-solid fa-plus"></i> Create New
          </Button>
          <div className="notificationContainer  flex flex-col relative items-center ">
           <div className="notificationNumberBox  w-3.75 h-3.75 bg-purple-500 rounded-full flex items-center justify-center text-[12px] absolute ">3</div>
            <div className="bellIconImg mt-2 mr-1">
              <i class="fa-solid fa-bell text-[24px]"></i>
            </div>
            
          </div>
          <div className="profileContainer flex items-center gap-2">
            <div className="profileImgBox w-12 h-12 ">
              <img className="w-full" src={demoImg} alt="profileImg" />
            </div>
            <div className="userInfoBox flex items-center gap-1.5">
              <div className="userInfo">
                <h3 className="text-[14px] font-medium">Karan Singh</h3>
                <p className="text-[12px] text-[#94A3B8]">Admin</p>
              </div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
