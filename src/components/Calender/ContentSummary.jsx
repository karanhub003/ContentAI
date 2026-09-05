import React from 'react'
import { contentSummary } from '../../data/calendar'
import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts'
export default function ContentSummary() {
  return (
    <div className='ContentSummaryContainer bg-[#0D131D]  rounded-xl p-5 '>
            <div className="topContainer  flex items-center gap-2 pt-2  ">
                <h2>Content Distribution</h2>
                <i class="fa-solid fa-circle-info"></i>
              </div>
        <div className="contentPieChartWrapper flex items-center mt-2  ">
        <div className="DistributionPieChartContainer  w-[45%] shrink-0 relative  ">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={contentSummary}
                    dataKey="posts"
                    nameKey="name"
                    innerRadius={45}
                    outerRadius={65}
                    startAngle={100}
                    endAngle={-270}
                    shape={(props) => <Sector {...props} fill={props.payload.color} stroke="none" />}
                  />
                </PieChart>
              </ResponsiveContainer>
         <div className="postbox absolute top-18 left-15.5 text-center">
                <p className=' font-semibold'>24</p>
                <p className=' font-semibold'>Total</p>
            </div>
            </div>
           
            <div className="pieChartInfoContainer   flex-1 min-w-0    ">
                <div className="infoBox flex flex-col gap-2.5">
                    {contentSummary.map((content)=>(
                     <>
                    <div className="infoCard flex  justify-between">
                        <div className="platformInfoBox flex items-center gap-2" >
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: content.color }}></div>
                            <div className="text-[12px]">{content.name}</div>
                           </div>
                    <div className="percentageInfoBox flex  ">
                    <p className="text-[12px] text-[#94A3B8]">{content.posts}</p>
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
