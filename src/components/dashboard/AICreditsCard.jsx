import React, { Children } from 'react'
import Button from '../common/Button'

export default function AICreditsCard() {
  return (
    <div className='aiCreditsContainer flex flex-col gap-2.5 bg-[#0D131D] p-5 border border-[#1E293B] rounded-lg mt-10'>
        <h3 className='font-medium text-[18px]'>AI credits</h3>
        <p>8,450 <span className='text-[#94A3B8]'>/10,000</span></p>
        <div className='w-full bg-slate-500 h-1.5 rounded-full'>
          <div className=" w-[80%] bg-purple-400 h-1.5 rounded-full"></div>
        </div>
        <Button>Upgrade Plan</Button>
    </div>
  )
}

