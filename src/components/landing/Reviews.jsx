import React from 'react'
import {reviews} from '../../data/landingPage'

export default function Reviews() {
  return (
    <div className='reviewsSectionContainer w-345 mx-auto py-5 cursor-pointer'>
    <div className="TopInfoWrapper  flex justify-between items-center ">
        <div className="leftSideWrapper flex flex-col gap-3">
          <div className="smallInfo flex gap-1.5 items-center w-35 rounded-lg p-1.5 bg-purple-600/30 text-purple-400">
            <i class="fa-solid fa-wand-magic-sparkles text-purple-400 text-[10px]"></i>
            <p className=" text-[10px]  ">WHAT OUR USER SAY</p>
          </div>
          <div className="infoWrapper">
            <div className="headingWrapper">
            <h2 className="text-[24px] font-semibold ">Loved by creators. Trusted by teams.</h2>
        
          </div>
          <p className="text-[14px] text-[#94A3B8]">
            Join thousands of happy users who are growing their audience with ContentPilot Al
          </p>
          </div>
        </div>
        <div className="rightSideWrapper">
          <div className=" arrowWrapper flex items-center gap-2">
            <div className='w-10 h-10 border rounded-full flex items-center justify-center border-[#1E293B] cursor-pointer'><i class="fa-solid fa-arrow-left text-[20px]"></i></div>
            <div className='w-10 h-10 border rounded-full flex items-center justify-center border-[#1E293B] cursor-pointer'><i class="fa-solid fa-arrow-right text-[20px]"></i></div>
          </div>
        </div>
      </div>        
        <div className="bottomReviewsCardWrapper border grid grid-cols-3">
            <div className="reviewsCards border ">
                {
                    reviews.map((review)=>(
                        <>
                        <div className='w-20 h-20 border rounded-full flex items-center justify-center overflow-hidden' >
                            <img className='w-full' src={review.image} alt={review.name} />
                        </div>
                        <div className="infoBox">
                            <div className="topBox">
                                <p>"{review.review}"</p>
                                </div>  
                                <div className="bottomBox">
                                    <div className="nameBox">
                                        <h2>{review.name}</h2>
                                        <p>{review.role}</p>
                                    </div>
                                    {
                                        Array.from({length:review.rating},()=>(<span>⭐</span>))
                                    }
                                </div>
                        </div>
                        </>
                    ))
                }
            </div>
        </div>

    </div>
  )
}
