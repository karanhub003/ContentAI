import React, { Children } from 'react'
import Button from '../common/Button'

export default function AICreditsCard() {
  return (
    <div className='aiCreditsContainer flex flex-col  gap-2.5 bg-[#0D131D] p-5 border border-[#1E293B] rounded-lg mt-10'>
        <h3 className='font-medium text-[18px] text-center'>FREE PLAN</h3>
        <Button >Upgrade Plan</Button>
    </div>
  )
}

