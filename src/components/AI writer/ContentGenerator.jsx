import React from 'react'
import ContentTypeSection from './ContentTypeSection'
import ContentDetails from './ContentDetails'

export default function ContentGenerator() {
  return (
    <div className='contentGeneratorMainContainer rounded-xl py-6 px-4  bg-[#0D131D] flex flex-col gap-5 min-w-0'>
        <ContentTypeSection/>
        <ContentDetails/>
    </div>
  )
}
