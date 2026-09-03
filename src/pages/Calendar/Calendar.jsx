import React from 'react'
import CalenderHeader from '../../components/Calender/Header'
import CalendarControls from '../../components/Calender/CalendarControls'
import CalendarGrid from '../../components/Calender/CalendarGrid'
import CalendarContent from '../../components/Calender/CalendarContent'

export default function Calendar() {
  return (
    <div className='calendarContentContainer'>
        <CalenderHeader/>
        <CalendarControls/>
        <div className="calendarMainContainer grid grid-cols-[1fr_400px] gap-8 mt-6">
          <CalendarGrid/>
          <CalendarContent/>
        </div>
    </div>
  )
}
