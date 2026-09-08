import React from 'react'
import blogpost from "../../assets/Template Img/blogpost.webp";

export default function CustomTemplate() {
  return (
    <div className='CustomTemplateContainer border p-3 border-[#1E293B] bg-[#0D131D] rounded-lg'>
        <h3 className='text-white  font-bold'>Your Custom Templates</h3>
       <div className="flex justify-between items-center pb-2">
       <div className="info ">
         <p className='text-2xl font-semibold'>12</p>
        <p className='text-[12px] text-[]'>Templates Created</p>
       </div>
       <img className='w-20' src={blogpost} alt="blogPost" />
       </div>
       <hr  />
       <p className='px-1.5 pt-1.5 text-purple-600 cursor-pointer'>View All Templates</p>
    </div>
  )
}
