import React from 'react'



export default function StatCard({stats}) {
   
  return (
    <div className='statsCardContainer w-52.75 h-32.5   p-5.75 flex bg-[#0D131D] gap-2.5 rounded-xl'>
        <div className={stats.style}>
            <i class={stats.icon} ></i>
        </div>
        <div className="statsInfoBox flex flex-col gap-2 items-start">
            <p className='text-[12px]'>{stats.title}</p>
            <h2 className='text-[20px]'>{stats.value}</h2>
            <p className='text-[12px] inline text-green-600'>{stats.change} <span className='text-[#94A3B8]'>{stats.comparison}</span></p>
        </div>
    </div>
  )
}
