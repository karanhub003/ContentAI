import React from 'react'
import Button from '../common/Button'
export default function() {
  return (
    <div className='headerContainer flex justify-between'>
      <div className="headerInfoContainer ">
        <h3 className='text-2xl'>Template</h3>
        <p className='text-[12px] text-[#94A3B8]'>Kickstart your content creation with AI-powered templates.</p>
    </div>
     <Button variant='secondary' size='md'>+ Create Custom Template</Button>

     
    </div>
  )
}
