import React from 'react'
import Button from '../common/Button'
import logoImg from '../../assets/New folder/logoimage.png'
export default function Header() {
  return (
    <div className='landingHeaderContainer p-3'>
    <div className="navBar flex justify-between items-center  ">
       <div className="logoContainer flex items-center gap-1">
            <div className="logoImgBox w-8">
                <img className='w-full' src={logoImg} alt="logoImage" />
            </div>
            <h2 className='text-[18px] font-bold'>ContentPilot <span className='text-purple-600'>Ai</span></h2>
        </div> 
        <div className="navLinksContainer flex gap-5 items-center">
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold cursor-pointer hover:text-purple-400 hover:underline">Product</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold cursor-pointer hover:text-purple-400 hover:underline">Features</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold cursor-pointer hover:text-purple-400 hover:underline">Pricing</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold cursor-pointer hover:text-purple-400 hover:underline">Resources</div>
            <div className="navLinksBox text-[#94A3B8] text-[14px] font-bold cursor-pointer hover:text-purple-400 hover:underline">About</div>
        </div>
        <div className="ctaBtnContainer flex gap-4 items-center">
            <Button  variant='outline' size='md'>Sign in</Button>
            <Button variant= 'secondary'  size='lg'>Get started free </Button>
        </div>

    </div>
    </div>
  )
}
