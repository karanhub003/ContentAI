import React from 'react'
import Button from '../common/Button'

export default function Header() {
  return (
    <div className='calenderHeaderContainer flex justify-between'>
    <div className="headerInfoContainer ">
        <h3 className='text-2xl'>Content Calendar</h3>
        <p className='text-[12px] text-[#94A3B8]'>Plan, schedule and publish content across all your channels.</p>
    </div>
   <div className="rightSideContainer flex items-center gap-3">
     <div className="togglerContainer flex items-center  rounded-xl w-60 h-10  border border-[#263244] text-white">
        <div className="calendarView active:bg-[#8B5CF6]  w-[50%] h-full text-[14px] rounded-lg flex items-center justify-center  ">Calendar View</div>
        <div className="listView  active:bg-[#8B5CF6] w-[50%] text-[14px] h-full rounded-lg  flex items-center justify-center ">List View</div>
    </div>
     <Button variant='outline' size='md'>Filter</Button>
   </div>
   
    </div>
  )
}
