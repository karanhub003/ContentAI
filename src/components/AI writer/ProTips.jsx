import React from "react";
import authImg from "../../assets/New folder/auth.webp";
import accuImg from "../../assets/New folder/accu.webp";
import floderImg from "../../assets/New folder/floder.webp";
import lockImg from "../../assets/New folder/lock.webp";
export default function ProTips() {
  return (
    <div className="proTipsContainer border p-1.5  bg-[#0D131D]  border-[#1E293B] rounded-xl">
      <h2 className="pl-2">Pro Tips</h2>
      <div className="tipsWrapperContainer  flex py-2.5 px-0 gap-7 ">
        <div className="tipsBox  flex gap-5 items-center  p-1.5">
          <div className="logoImg w-15">
            <img  className="w-full" src={authImg} alt="authImg" />
          </div>
          <div className="tipsInfo flex flex-col gap-0.5">
            <h4 className=" text-[14px] font-semibold">Be specific with your prompt</h4>
            <p className="text-[12px] text-[#94A3B8]">The more specific you are, the better the output</p>
          </div>
        </div>
        <div className="tipsBox  flex gap-5 items-center  p-1.5 ">
          <div className="logoImg w-15">
            <img className="w-full"  src={accuImg} alt="accuImg" />
          </div>
          <div className="tipsInfo flex flex-col gap-0.5">
            <h4 className=" text-[14px] font-semibold">Choose the right tone</h4>
            <p className="text-[12px] text-[#94A3B8]">Tone of voice helps AI match your brand style</p>
          </div>
        </div>
        <div className="tipsBox  flex gap-5 items-center p-1.5 ">
          <div className="logoImg w-15">
            <img className="w-full"  src={floderImg} alt="folderImg" />
          </div>
          <div className="tipsInfo flex flex-col gap-0.5">
            <h4 className=" text-[14px] font-semibold">Review and refine</h4>
            <p className="text-[12px] text-[#94A3B8]">Always review and refine your Ai generated content</p>
          </div>
        </div>
        <div className="tipsBox  flex gap-5 items-center p-1.5 ">
          <div className="logoImg w-15">
            <img className="w-full"  src={lockImg} alt="lockImg" />
          </div>
          <div className="tipsInfo flex flex-col gap-0.5">
            <h4 className=" text-[14px] font-semibold">Save your favorites</h4>
            <p className="text-[12px] text-[#94A3B8]">Save and reuse your best content for later</p>
          </div>
        </div>
      </div>
    </div>
  );
}
