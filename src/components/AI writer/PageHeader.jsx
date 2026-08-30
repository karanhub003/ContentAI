import React from 'react'

export default function PageHeader() {
  return (
    <div className='subHeaderContainer  flex items-center gap-3 '>
        <div className="headerLogoImg border  border-[#1E293B] rounded-full w-10 h-10 flex items-center justify-center">
            <i class="fa-solid fa-pen text-purple-600 text-[18px]"></i>
        </div>
        <div className="headerInfo">
            <h2 className='text-[24px] '>AI Writer</h2>
            <p className='text-[14px] text-[#94A3B8]'>Create high-quality content in seconds with power of AI</p>
        </div>
        

        
        </div>
  )
}
