import React from "react";
import logoImg from "../../assets/New folder/logoimage.png";
export default function Footer() {
  return (
    <div className="footerSectionContainer w-345 mx-auto py-8 grid grid-cols-[300px_1fr] my-5">
      <div className="leftSideContainer  flex flex-col gap-5">
        <div className="topSide">
          <div className="logoContainer flex items-center gap-1">
            <div className="logoImgBox w-8">
              <img className="w-full" src={logoImg} alt="logoImage" />
            </div>
            <h2 className="text-[18px] font-bold">
              ContentPilot <span className="text-purple-600">Ai</span>
            </h2>
          </div>
          <p className="text-[12px] text-[#94A3B8]">
            Create. Plan. Publish Grow with{" "}
            <span className="text-purple-500">Al</span>.
          </p>
        </div>
        <div className="socialWrapper  flex items-center gap-4.5 ">
          <i class="fa-brands fa-x-twitter text-[20px] text-[#94A3B8]"></i>
          <i class="fa-brands fa-linkedin-in text-[20px] text-[#94A3B8]"></i>
          <i class="fa-brands fa-youtube text-[20px] text-[#94A3B8]"></i>
          <i class="fa-brands fa-instagram text-[20px] text-[#94A3B8]"></i>
        </div>
      </div>
      <div className="rightSideContainer  grid grid-cols-4">
        <div className="productList  p-1.5">
          <h2 className="text-[15px] font-semibold text-[#94A3B8]">Product</h2>
          <div className="listWrapper flex flex-col gap-1 text-[12px] font-medium text-[#64748B] ">
            <p>AI Writer</p>
            <p>Templates</p>
            <p>Calender</p>
            <p>Analytics</p>
          </div>
        </div>
        <div className="Company  p-1.5">
          <h2 className="text-[15px] font-semibold text-[#94A3B8]">Company</h2>
          <div className="listWrapper flex flex-col gap-1 text-[12px] font-medium text-[#64748B] ">
            <p>About</p>
            <p>Carers</p>
            <p>Blog</p>
            <p>Press</p>
          </div>
        </div>
        <div className="Resources r p-1.5">
          <h2 className="text-[15px] font-semibold text-[#94A3B8]">Resources</h2>
          <div className="listWrapper flex flex-col gap-1 text-[12px] font-medium text-[#64748B] ">
            <p>Help Center</p>
            <p>Documentation</p>
            <p>Community</p>
            <p>API</p>
          </div>
        </div>
        <div className="Legal  p-1.5">
          <h2 className="text-[15px] font-semibold text-[#94A3B8]">Legal</h2>
          <div className="listWrapper flex flex-col gap-1 text-[12px] font-medium text-[#64748B] ">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Policy</p>
          <p>@ 2026 ContentPilot AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
