import React from 'react'

export default function BestTimePost() {
  return (
    <div className='BestTimePostContainer  p-5 flex flex-col gap-1.5 bg-[#0D131D] rounded-lg'>
        <h2 className='text-[18px] font-bold'>Best Posting Time</h2>
        <p className='text-[12px] text-[#CBD5E1]'>Your audience is most active on:</p>
        <div className="timeBoxWrapper flex gap-3.5">
            <div className="timeBox border p-1.5 rounded-lg  bg-purple-700/20 border-purple-800">
            <p className='text-[14px] text-purple-200'>10:00AM - 12:00PM</p>
        </div>
        <div className="timeBox border p-1.5 rounded-lg bg-purple-700/20 border-purple-800 ">
            <p className='text-[14px] text-purple-200'>04:00PM - 06:00AM</p> 
        </div>
        </div>
        <p className='text-[12px] text-[#CBD5E1]'><i class="fa-solid fa-globe"></i> Timezone: Asia/kolkata</p>
    </div>
  )
}
