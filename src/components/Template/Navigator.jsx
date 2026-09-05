import React from 'react'
import Input from '../common/Input'

export default function Navigator() {
  return (
    <div className='navigatorContainer border border-[#1E293B] rounded-lg flex justify-between p-3  '>
         <div className="searchBarContainer border border-[#1E293B] rounded-lg  py-1.5 px-2.5 w-75">
                    <div className="searchWrapperBox flex items-center justify-center gap-2.5 w-full ">
                      <div className="div flex items-center justify-center flex-0 ">
                        <i class="fa-solid fa-magnifying-glass text-[14px]"></i>
                      </div>
                      <Input>Search Template...</Input>
                    </div>
         </div>
         <div className="rightSideWrapper flex gap-3.5">
             <div className="multiBtnWrapper flex gap-2">
            <div className="categoriesContainer flex rounded-lg border border-[#1E293B]   px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033] gap-3.5 items-center justify-center">
          <div className="infoChannel">
            <p>
               All Categories 
            </p>
          </div>
          <div className="dorpIcon">
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
            <div className="categoriesContainer flex rounded-lg border border-[#1E293B]   px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033] gap-3.5 items-center justify-center">
          <div className="infoChannel">
            <p>
               All Platforms
            </p>
          </div>
          <div className="dorpIcon">
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
            <div className="categoriesContainer flex rounded-lg border border-[#1E293B]   px-4 py-2 text-sm text-[#CBD5E1] hover:bg-[#172033] gap-3.5 items-center justify-center">
          <div className="infoChannel flex gap-1">
            <span>Sort by:</span><p>Popular</p>
          </div>
          <div className="dorpIcon">
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
          </div>
          <div className="ViewToggler flex border border-[#1E293B]  rounded-lg overflow-hidden  ">
            <div className="toggleBox text-white text-[18px]   p-2  active:bg-purple-500 "><i class="fa-solid fa-border-all"></i></div>
            <div className="toggleBox text-white text-[18px]  p-2   active:bg-purple-500 "><i class="fa-solid fa-list"></i></div>
          </div>
         </div>
    </div>
  )
}
