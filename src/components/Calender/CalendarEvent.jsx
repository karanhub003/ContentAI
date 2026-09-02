import React from 'react'

export default function CalendarEvent({event}) {
  return (
    <div className='CalendarEvenContainer '>
    <div className={`rounded-lg border border-[#3B82F6] bg-blue-500 p-3`}>
  <p className="text-xs text-[#94A3B8]">
    {event.time}
  </p>

  <p className="mt-1 text-xs text-white">
    {event.title}
  </p>

  <div className="mt-1 flex justify-end">
    <i className={`fa-brands ${event.icon} text-sm`}></i>
  </div>
</div>
    </div>
  )
}
