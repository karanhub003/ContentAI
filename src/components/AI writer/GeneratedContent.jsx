import React from 'react'
import GeneratedContentHeader from './GeneratedContentHeader'
import EditorToolbar from './EditorToolbar'
import EditorArea from './EditorArea'
import ContentAction from './ContentAction'

export default function GeneratedContent() {
  return (
    <div className='GeneratedContentContainer  rounded-xl py-6 px-4  bg-[#0D131D] min-w-0 flex flex-col gap-3'>
        <GeneratedContentHeader/>
       <div className="editorWrapperBox border rounded-xl border-[#1E293B]">
        <EditorToolbar/>
        <EditorArea/>
       </div>
       <ContentAction/>
    </div>
  )
}
