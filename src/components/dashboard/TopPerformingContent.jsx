import React from 'react'
import Button from '../common/Button'
import TopPerformingCards from './TopPerformingCards'
import {topPerformingContent} from  '../../data/dashboard'

export default function TopPerformingContent() {
  return (
    <div className='topPerformingContainer w-[50%]  bg-[#0D131D]  rounded-xl p-5 flex flex-col gap-4.5'>
        <div className="topBoxContainer flex justify-between items-center ">
            <div className="infoBox flex items-center gap-2.5">
                <h2>Top Performing Content </h2>
            <i class="fa-solid fa-circle-info text-[#94A3B8]"></i>
            </div>
            <Button>View all</Button>
        </div>
    <div className="topPerformingCardWrapper flex flex-col gap-3.5 ">
        {
            topPerformingContent.map((topContent)=>(
                <TopPerformingCards key={topContent.id} topContent={topContent}/>
            ))
        }
    </div>
    </div>
  )
}
