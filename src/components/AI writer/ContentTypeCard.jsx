import React from 'react'

export default function ContentTypeCard({content}) {
  return (
    <div className='typeSelectionCard border flex gap-2.5 items-center p-2.5 rounded-xl border-[#1E293B] hover:border-[#8B5CF6] cursor-pointer active:border-[#8B5CF6] group'>
        <div className="logoImg group-hover:text-[#8b5cf6] ">
           <i class={`fa-solid ${content.icon} text-[20px]`}></i> 
        </div>
        <div className="cardInfo">
            <h4 className='text-[12px] font-semibold'>{content.title}</h4>
            <p className='text-[12px] text-[#94A3B8]'>{content.description}</p>
        </div>
    </div>
  )
}
