import React from 'react'
import PageHeader from '../../components/AI writer/PageHeader'
import ProTips from '../../components/AI writer/ProTips'
import ContentTypeSection from '../../components/AI writer/ContentTypeSection'
import ContentGenerator from '../../components/AI writer/ContentGenerator'

export default function AIWriter() {
  return (
    <div className='flex flex-col gap-3.5'>
      <PageHeader/>


    <div className="WriterWorkspaceContainer grid grid-cols-2 ">
      <ContentGenerator/>
    </div>
      <ProTips/>



    </div>
  )
}
