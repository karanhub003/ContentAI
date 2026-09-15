import React from 'react'
import Button from '../common/Button'

export default function Price() {
  return (
    <div className='priceSectionContainer w-345 mx-auto py-5 flex flex-col gap-5'>
        <div className="TopInfoWrapper  flex justify-between items-center ">
        <div className="leftSideWrapper flex flex-col gap-3">
          <div className="smallInfo flex gap-1.5 items-center w-48 rounded-lg p-1.5 bg-purple-600/30 text-purple-400">
            <i class="fa-solid fa-wand-magic-sparkles text-purple-400 text-[10px]"></i>
            <p className=" text-[10px]  ">SIMPLE, TRANSPARENT PRICING</p>
          </div>
          <div className="infoWrapper">
            <div className="headingWrapper">
            <h2 className="text-[24px] font-semibold ">Choose the plan that fits your goals.</h2>
        
          </div>
          <p className="text-[14px] text-[#94A3B8]">
            Start free and upgrade anytime.
          </p>
          </div>
        </div>
        <div className="rightSideWrapper border border-[#1E293B] rounded-full flex overflow-hidden p-1 w-55 relative ">
           <div className='cursor-pointer text-[#94A3B8] active:text-white bg-purple-400 rounded-full py-1.5 px-2.5 text-[14px] font-medium'>Monthly</div>
           
                <div className='cursor-pointer text-[#94A3B8] rounded-full py-1.5 px-2.5 text-[14px] font-medium'>Yearly</div>
                <div className='absolute text-[12px]  rounded-lg top-1 right-3.5 px-1 bg-purple-700 '>Save 20%</div>
           
        
      </div> 

    </div> 
    <div className="bottomPriceCardsWrapper grid grid-cols-4 gap-8 mt-2.5">
      
      <div className="priceCard  border flex flex-col gap-6.5 justify-between px-6.5 py-3 rounded-xl bg-[#0D131D] border-[#1E293B]">
       <div className="outerBox flex flex-col gap-4.5">
         <div className="topBox">
            <h2 className='font-bold'>Free</h2>
            <p className='text-[12px] font-medium text-[#94A3B8]'>Get started weh the basics.</p>
        </div>
        <div className="priceBox">
            <h1 className='text-[34px] font-semibold'>$0 <span className='text-[12px] text-[#94A3B8]'>/month</span></h1>
        </div>
        <div className="infoBox flex flex-col gap-1.5">
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Al content generation (limited)</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>10 scheduled pasta/month</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check  text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Basic analytics</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>1 team member</p>
            </div>
        </div>
       </div>
        <Button variant='secondary' size='lg'>Get started</Button>
    
        </div>  
      
      <div className="priceCard border-purple-400  border flex flex-col gap-6.5 justify-between px-6.5 py-3 rounded-xl bg-[#0D131D] ">
        <div className="outerBox flex flex-col gap-4.5">
        <div className="topBox flex justify-between">
            <div className="leftSide">
            <h2 className='font-bold'>Pro</h2>
            <p className='text-[12px] font-medium text-[#94A3B8]'>For growing creators and teams.</p>
            </div>
            <div className="rightSide">
                <p className='text-[8px] font-bold  py-1 px-3 rounded-full bg-purple-500'>Most popular</p>
            </div>
        </div>
        <div className="priceBox">
            <h1 className='text-[34px] font-semibold'>$19 <span className='text-[12px] text-[#94A3B8]'>/month</span></h1>
        </div>
        <div className="infoBox flex flex-col gap-1.5">
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Unlimited content creations</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>100 scheduled posts/month</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Advanced analytics</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Up to 5 team members</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Priority support</p>
            </div>
        </div>
        </div>
        <Button variant='secondary' size='lg'>Get started</Button>
    
        </div>  
     
      <div className="priceCard  border flex flex-col gap-6.5 justify-between px-6.5 py-3 rounded-xl bg-[#0D131D] border-[#1E293B]">
      <div className="outerBox flex flex-col gap-4.5">
          <div className="topBox">
            <h2 className='font-bold'>Business</h2>
            <p className='text-[12px] font-medium text-[#94A3B8]'>For larger teams and agencies.</p>
        </div>
        <div className="priceBox">
            <h1 className='text-[34px] font-semibold'>$49 <span className='text-[12px] text-[#94A3B8]'>/month</span></h1>
        </div>
        <div className="infoBox flex flex-col gap-1.5">
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Everything in Pro</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>S0O scheduled posts/month</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Team collaboration tools</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>White-label options</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Priority support</p>
            </div>
        </div>
      </div>
        <Button variant='secondary' size='lg'>Get started</Button>
    
        </div>  
      <div className="priceCard  border flex flex-col gap-6.5  justify-between px-6.5 py-3 rounded-xl bg-[#0D131D] border-[#1E293B]">
        <div className="outerBox flex flex-col gap-4.5">
            <div className="topBox">
            <h2 className='font-bold'>Enterprise</h2>
            <p className='text-[12px] font-medium text-[#94A3B8]'>Custom solutions for your needs.</p>
        </div>
        <div className="priceBox">
            <h1 className='text-[34px] font-semibold'>Custom</h1>
        </div>
        <div className="infoBox flex flex-col gap-1.5">
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Everything in Business</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Custom limits</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Dedicated account manager</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>SSO & advance security</p>
            </div>
            <div className="div flex items-center gap-3.5">
            <i class="fa-solid fa-check text-green-400 text-[14px]"></i> 
            <p className='text-[14px] text-[#94A3B8] font-medium'>Custom Integrations</p>
            </div>
        </div>
        </div>
        <Button variant='secondary' size='lg'>Contact Sales</Button>
    
        </div>  
    </div>

    </div>
  )
}
