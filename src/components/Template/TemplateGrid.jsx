import React from 'react'
import Button from '../common/Button'
import {templates} from '../../data/template'
import TemplateGridCard from './TemplateGridCard'

export default function TemplateGrid() {
  return (
    <div className='templateGridContainer flex flex-col gap-2.5'>
    <div className="headingInfo flex items-center justify-between">
        <div className="heading flex items-center gap-1.5"><i class="fa-solid fa-fire text-purple-400"></i><h3>Popular Template</h3></div>
        <Button variant='outline' size='sm'>View All</Button>
    </div>

    <div className="templateCardWrapper grid grid-cols-6  gap-2 px-2">
    {
        templates.map((templates)=>(
            <TemplateGridCard key={templates.id} templates={templates}/>
        ))
    }
    </div>

    </div>
  )
}
