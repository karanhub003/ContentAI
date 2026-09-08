import React from 'react'
import Button from '../common/Button'
import proTips from '../../assets/Template Img/protip.png'

export default function ProTips() {
  return (
    <div className='ProTipsContainer border flex justify-between p-3 bg-purple-800/10 rounded-lg border-[#1E293B]'>
        <div className='flex gap-3.5 items-center'>
        <img className='w-10' src={proTips} alt="" />
        <div className="info">
            <h3 className='text-[14px]  font-bold text-[#F8FAFC]'>Pro Tips</h3>
            <p className='text-[12px] text-[#94A3B8]'>Use templates as a starting point and customize them to match your brand voice for the best results.</p>
        </div></div>
        <Button variant='outline'>Learn More</Button>
    </div>
  )
}
 