import React from 'react'
import PageHeader from '../../components/AI writer/PageHeader'
import ProTips from '../../components/AI writer/ProTips'
import ContentTypeSection from '../../components/AI writer/ContentTypeSection'
import ContentGenerator from '../../components/AI writer/ContentGenerator'
import GeneratedContent from '../../components/AI writer/GeneratedContent'

export default function AIWriter() {
  return (
    <div className='flex flex-col gap-3.5'>
      <PageHeader/>


    <div className="WriterWorkspaceContainer grid grid-cols-[1fr_1.2fr] gap-5 ">
      <ContentGenerator/>
      <GeneratedContent/>
    </div>
      <ProTips/>



    </div>
  )
}
