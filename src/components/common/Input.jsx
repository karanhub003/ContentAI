import React from 'react'

export default function Input({children}) {
  return ( 
    <div className='w-full'><input className='w-full outline-0' type="text" placeholder={children}/></div>
  )
}
