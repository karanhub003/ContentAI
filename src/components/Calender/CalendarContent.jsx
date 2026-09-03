import React from 'react'
import UpcomingSchedule from '../dashboard/UpcomingSchedule'
import  DistributionPieChart  from '../dashboard/DistributionPieChart'
import BestTimePost from './BestTimePost'

export default function CalendarContent() {
  return (
    <div className='CalendarContentContainer flex flex-col gap-9'>
       <UpcomingSchedule/>   
       <DistributionPieChart/>
       <BestTimePost/>

    </div>
  )
}
