import React from 'react'
import contentGeneratorImg from '../../assets/New folder/generateContentImg.webp'

export default function EditorArea() {
  return (
    <div className='EditorAreaContainer  h-129.5  flex justify-center items-center'>
        <div className="generatedContentWrapper  flex flex-col items-center">
            <img className='w-40' src={contentGeneratorImg} alt="contentImgGenerator" />
            <p className='font-bold py-2'>Your AI generated content will appear here.</p>
            <p className='text-[12px] text-[#94A3B8]'>Fill the details on the left and click</p>
            <p className='text-[12px] text-[#94A3B8]'>'Generator Content' to get started.</p>
        </div>
    </div>
  )
}
