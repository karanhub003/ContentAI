import React from 'react'
import CalenderHeader from '../../components/Calender/Header'
import CalendarControls from '../../components/Calender/CalendarControls'
import CalendarGrid from '../../components/Calender/CalendarGrid'

export default function Calendar() {
  return (
    <div className='calendarContentContainer'>
        <CalenderHeader/>
        <CalendarControls/>
        <div className="calendarMainContainer grid grid-cols-[1fr_380px]">
          <CalendarGrid/>
        </div>
    </div>
  )
}
