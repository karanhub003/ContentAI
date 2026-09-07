import React from 'react'
import {templateCategories,allTemplates} from '../../data/template'
import AllTemplateCard from './AllTemplateCard'

export default function AllTemplate() {
  return (
    <div className='AllTemplateContainer '>
        <h3 className='text-[20px] mb-3 font-bold'>All Template</h3>
        <div className="templateNavigator  flex items-center gap-2.5 p-2 mb-1">
        {
            templateCategories.map((template)=>(
                <div className="navigatorBox active:border-b active:border-purple-500 active:text-purple-500 p-1 cursor-pointer text-[#94A3B8] text-[14px] hover:border-b hover:border-purple-500">{template}</div>
            ))
        }
        </div>
    <div className="allTemplateCardWrapper grid grid-cols-3  gap-3">
        {
            allTemplates.map((template)=>(
                <AllTemplateCard key={template.id} template={template}/>
            ))
        }
    </div>

    </div>
  )
}
    