import React from 'react'
import Button from '../common/Button'
import bottomHero from '../../assets/Landing Page/bottomhero.webp'

export default function BottomHero() {
  return (
    <div className='bottomHeroSectionContainer bg-cover bg-no-repeat bg-center  max-w-375 mx-auto rounded-3xl border overflow-hidden border-purple-600 py-8 my-5' style={{ backgroundImage: `url(${bottomHero})` }}>
       <div className="infoWrapper flex flex-col gap-4 max-w-345 mx-auto">
        <div className="topSide flex flex-col gap-3">
                  <p className=" text-[10px] w-30 rounded-lg text-center  p-1.5 bg-purple-600/30 text-purple-400 ">
                  <i class="fa-solid fa-wand-magic-sparkles text-purple-400"></i>READY TO GROW?
                </p>
        
                <div className="heroHeadingSubHeadingWrapper  flex flex-col gap-2">
                  <div className="heading">
                    <h2 className="text-[24px] font-semibold">Start creating better content today.</h2>
                    
                  </div>
                  <div className="subHeading">
                    <p className="text-[12px] font-semibold text-[#94A3B8]" >
                      Join thousands of creators and businesses using <span>ContentPilot Al</span> to
                    </p>
                    <p className="text-[12px] font-semibold text-[#94A3B8]" > save time, stay consistent, and grow faster.</p>
                  </div>
                </div>
              </div>
               <div className="bottomSide flex flex-col gap-5">
                 <div className="ctaBtnWrapper  flex gap-4 items-center">
                    <Button variant="secondary" size="lg">Get started free</Button>
                    <Button variant="outline" size="lg">Watch demo</Button>
                </div>
               </div>
               </div> 
    </div>
  )
}
