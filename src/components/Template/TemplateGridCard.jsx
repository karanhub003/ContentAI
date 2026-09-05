import React from 'react'

export default function TemplateGridCard({templates}) {
  return (
    <div className='TemplateGridCardContainer border flex flex-col justify-between py-3.5 px-3 rounded-lg bg-[#0D131D] border-[#1E293B] gap-4'>
      <div className="topContainer flex  ">
        <div className="leftSide flex flex-col gap-1.5">
        <div className="topSide flex justify-between ">
          <img className='w-12' src={templates.image} alt={templates.imageAlt} />
      <div className="rightSide max-h-max ">
        <i class="fa-regular fa-star cursor-pointer"></i>
      </div>
        </div>
        <div className="info">
          <h3 className='text-[10px] font-bold'>{templates.title}</h3>
          <p className='text-[10px] text-[#94A3B8]'>{templates.description}</p>
        </div>
      </div>
      
      </div>
      <div className='flex items-center text-[12px] gap-1  text-[#94A3B8] '><i class="fa-solid fa-users text-[11px] "></i>
      <p className=''>{templates.uses} user</p></div>
    </div>
  )
}
