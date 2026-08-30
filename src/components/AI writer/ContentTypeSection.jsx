import React from 'react'
import {contentTypes} from '../../data/aiwriter'
import ContentTypeCard from './ContentTypeCard'
export default function ContentTypeSection() {
  return (
    <div className='contentTypeSelectionContainer '>
        <div className="typeSelectionHeading flex gap-2.5 items-center">
         <div className="countWrapper w-5 h-5 rounded-full flex items-center justify-center bg-purple-400 ">1</div>
         <h2 className='text-[20px]'>Content Type</h2>
        </div>
        <div className="typeSelectionCardsWrappersContainer  grid grid-cols-3 gap-4 px-1.5 ">
            {
                contentTypes.map((content)=>(
                  <ContentTypeCard key={content.id} content={content}/>  
                ))
            }
        </div>
    </div>
  )
}
