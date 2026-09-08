import React from 'react'
import {templateSummary} from '../../data/template'
import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts'
export default function TemplateUsageChart() {
  return (
     <div className='templateUsageContainer bg-[#0D131D]  rounded-xl p-4 '>
                <div className="topContainer  flex items-center gap-2 pt-2  ">
                    <h2>Template Usage</h2>
                 
                  </div>
            <div className="contentPieChartWrapper flex items-center mt-2  gap-2 ">
            <div className="DistributionPieChartContainer  w-[45%] shrink-0 relative  ">
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie
                        data={templateSummary}
                        dataKey="usage"
                        nameKey="name"
                        innerRadius={35}
                        outerRadius={55}
                        startAngle={100}
                        endAngle={-270}
                        shape={(props) => <Sector {...props} fill={props.payload.color} stroke="none" />}
                      />
                    </PieChart>
                  </ResponsiveContainer>
             <div className="postbox absolute top-17.25 left-11.75 text-center">
                    <p className=' font-semibold text-[14px]'>48</p>
                    <p className=' font-semibold text-[14px]'>Total</p>
                </div>
                </div>
               
                <div className="pieChartInfoContainer  flex-1     ">
                    <div className="infoBox flex flex-col gap-2.5">
                        {templateSummary.map((content)=>(
                         <>
                        <div className="infoCard flex  justify-between">
                            <div className="platformInfoBox flex items-center gap-2" >
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: content.color }}></div>
                                <div className="text-[12px]">{content.name}</div>
                               </div>
                        <div className="percentageInfoBox flex  ">
                        <p className="text-[12px] text-[#94A3B8]">{content.usage}</p>
                        <p className="text-[12px] text-[#94A3B8]">({content.percentage}%)</p>
                        </div>
                        </div>
                         <hr  className='border-[#1E293B]'/>
                         </>
                            
                        ))}
                    </div>
                    
                </div>
                  </div>
        </div>
  )
}
