import React from "react";

export default function AllTemplateCard({ template }) {
  return (
    <div className="AllTemplateCardContainer flex border py-3 px-2 bg-[#0D131D] border-[#1E293B] rounded-lg gap-3 hover:border-purple-500 cursor-pointer ">
      <div className="leftSideContainer w-8 ">
        <img className="w-full" src={template.image} alt={template.imageAlt} />
      </div>
      <div className="rightSideContainer flex justify-between  ">
        <div className="infoBoxStarBox flex flex-col items-start max-w-40 gap-2.5  ">
          <div className="infoWrapper ">
            <h3 className="text-[12px] font-bold">{template.title}</h3>
            <div className="div m"><p className="text-[10px] text-[#94A3B8] ">{template.description}</p></div>
          </div>
           <div className="btnBox flex items-center  gap-2.5 ">
            <p className="text-[10px] font-medium py-1 px-1.5 border border-[#1E293B] rounded-lg text-[#94A3B8]">{template.category}</p>
            <p className="text-[10px] font-medium py-1 px-1.5 border border-[#1E293B] rounded-lg text-[#94A3B8]">{template.platform}</p>
          </div>
        </div>
        <div className="btnUserBox flex flex-col justify-between items-end">
          <i class="fa-regular fa-star cursor-pointer text-[#94A3B8]"></i>
         <div className="flex items-center gap-1 pb-1 text-[#94A3B8]"><i class="fa-solid fa-users text-[9px] "></i><p className="text-[10px]">{template.uses} <span className="text-[9px]">uses</span></p></div>
        </div>
      </div>
    </div>
  );
}
