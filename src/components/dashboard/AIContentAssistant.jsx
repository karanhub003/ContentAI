import React from 'react'
import Button from "../common/Button";

export default function AIContentAssistant() {
  return (
    <div className='AIContentAssistantContainer  bg-[#0D131D]  rounded-xl p-3 flex flex-col gap-4.5 '>
  <div className="topContainer  flex items-center gap-2 pt-2  ">
        <h2 className='text-[20px]'>AI Assistant</h2>
        <i class="fa-solid fa-circle-info"></i>
      </div>
      <div className="innerGradientContainer border border-[#7B1FA2] py-4 px-6  bg-linear-to-r from-purple-700/25 to-purple-900/5 flex flex-col gap-2 rounded-xl">
        <i class="fa-regular fa-star"></i>
        <h4 className='text-[14px] font-semibold'>Need content ideas or first draft?</h4>
        <p className='text-[13px]'>Let AI help you create amazing content in seconds.</p>
        <Button variant='secondary' size='md' className='w-50'>Create with AI</Button>
      </div>
      
      </div>
  )
}
