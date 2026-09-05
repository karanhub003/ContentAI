import React from 'react'
import  DistributionPieChart  from '../dashboard/DistributionPieChart'
import BestTimePost from './BestTimePost'
import UpcomingContent from './UpcomingContent'
import ContentSummary from './ContentSummary'

export default function CalendarContent() {
  return (
    <div className='CalendarContentContainer flex flex-col gap-5'>
       <UpcomingContent/>
       <ContentSummary/>
       <BestTimePost/>

    </div>
  )
}
