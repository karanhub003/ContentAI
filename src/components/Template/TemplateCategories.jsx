import React from 'react'
import {templateCategories} from '../../data/template'
export default function TemplateCategories() {
  return (
    <div className='TemplateCategoriesContainer border border-[#1E293B] px-4 py-2 bg-[#0D131D] rounded-lg w-70 mt-4 '>
        <h3 className='text-[14px]'>Template Categories</h3>
        <div className="categoriesWrapper mt-2 ">
            {
                templateCategories.map((category)=>(
                    <div className='flex justify-between items-center py-2 px-3.5  rounded-lg'>
                        <p className='text-[12px] font-semibold text-[#94A3B8]'>{category.name}</p>
                        <p className='text-[12px] font-semibold text-[#94A3B8]'>{category.value}</p>
                    </div>
                ))
            }
        </div>
        <hr className='border-[#1E293B]' />
        <div className='p-3.5'>
            <p className='text-[12px] text-purple-400 font-semibold cursor-pointer'>+ Create New Category</p>
        </div>
    </div>
  )
}
