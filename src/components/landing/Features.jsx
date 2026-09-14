import React from "react";
import Button from "../common/Button";
import {productFeatures} from '../../data/landingPage'
export default function Features() {
  return (
    <div className="featuresSectionContainer w-345 mx-auto py-5">
      <div className="mainContentWrapper grid grid-cols-[1fr_1.75fr]">
        
        <div className="leftSideContainer  flex flex-col gap-7">
          <div className="topBox flex flex-col gap-1.5">
            <div className="smallInfo flex gap-1.5 items-center w-35 rounded-lg p-1.5 bg-purple-600/30 text-purple-400">
            <i class="fa-solid fa-wand-magic-sparkles text-purple-400 text-[10px]"></i>
            <p className=" text-[10px]  ">POWERFUL FEATURES</p>
          </div>
         <div className="headingWrapper  w-80 flex flex-col gap-2">
            <div className="headingBreakBox">
            <h2 className="text-[24px] font-semibold">Everything you need  </h2>
            <h2 className="text-[24px] font-semibold">to create, manage,</h2>
            <h2 className="text-[24px] font-semibold">and grow.</h2>
            </div>
          <p className="text-[14px] text-[#94A3B8]">
            ContentPlot Al combines powerful tools with an intuitive experience to help you do more.
          </p>
         </div>
          </div>
           <div className="ctaBtn w-50">
             <Button variant="secondary" size="lg">Explore all features</Button>
           </div>
        </div>
        <div className="rightSideContainer  grid grid-cols-3 gap-4 ">
        {
            productFeatures.map((product)=>(
                <div className="border flex flex-col gap-3.5 py-4 px-8 rounded-lg border-[#1E293B]">
                  <div className="w-14 h-14  flex items-center justify-center rounded-lg bg-purple-600/30">
                    <i class={`${product.image} text-[20px] text-purple-400`}></i>
                    </div>
                    <div className="infoBox">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-[14px] text-[#94A3B8] font-medium">{product.description}</p>
                    </div>
                </div>
            ))
        }
        </div>
      </div>
    </div>
  );
}
 