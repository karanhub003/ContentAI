import React from 'react'
import Header from '../../components/Template/Header'
import Navigator from '../../components/Template/Navigator'
import TemplateGrid from '../../components/Template/TemplateGrid'
import AllTemplate from '../../components/Template/AllTemplate'

export default function Template() {
  return (
    <div className='templateContainer'>
        <div className="topContainer">
          <Header/>
        <Navigator/>
        </div>
        <div className="contentContainer grid grid-cols-[1fr_280px]">
          <main>
            <TemplateGrid/>
            <AllTemplate/>
          </main>
        </div>
    </div>
  )
}
