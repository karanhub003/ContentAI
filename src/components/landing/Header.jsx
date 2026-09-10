import React from 'react'
import Button from '../common/Button'
import logoImg from '../../assets/New folder/logoimage.png'
export default function Header() {
  return (
    <div className='landingHeaderContainer'>
    <div className="navBar flex justify-between items-center max-w-345 mx-auto p-1.5">
       <div className="logoContainer flex items-center gap-1">
            <div className="logoImgBox w-8">
                <img className='w-full' src={logoImg} alt="logoImage" />
            </div>
            <h2 className='text-[18px] font-bold'>ContentPilot <span className='text-purple-600'>Ai</span></h2>
        </div> 
        <div className="navLinksContainer flex gap-5 items-center">
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold">Product</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold">Features</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold">Pricing</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold">Resources</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold">About</div>
        </div>
        <div className="ctaBtnContainer flex gap-4 items-center">
            <Button  variant='outline' size='md'>Sign in</Button>
            <Button variant= 'secondary'  size='lg'>Get started free </Button>
        </div>

    </div>
    </div>
  )
}
