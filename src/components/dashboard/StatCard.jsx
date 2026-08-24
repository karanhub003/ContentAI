import React from 'react'



export default function StatCard({stats}) {
   
  return (
    <div className='statsCardContainer border p-3.5 flex bg-[#0D131D] gap-3.5 rounded-xl'>
        <div className={stats.style}>
            <i class={stats.icon} ></i>
        </div>
        <div className="statsInfoBox">
            <h4>{stats.title}</h4>
            <h2>{stats.value}</h2>
            <span>{stats.change}</span> <span>{stats.comparison}</span>
        </div>
    </div>
  )
}
