import React from 'react'

export default function Button({children}) {
  return (
    <div className='buttonContainer p-2.5 bg-[#7C3AED] text-center rounded-lg'>
        <button className=''>    
          {children}                  
        </button>
    </div>
  )
}
