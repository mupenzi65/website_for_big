import React from 'react'
import { img1 } from '../assets'

const Header = () => {
  return (
    <div className=' w-full '>
        <div className=' '>
        <div className='flex w-full  '>
        <div className='bg-gray-800 relative w-full  max-w-full h-[550px] shadow-2xl overflow-y-hidden '>
          <img src={img1} className='w-full absolute h-full mix-blend-overlay inset-0  object-cover ' alt="" />       
      </div>
      <div className='absolute block right-0 sm:mt-[60px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <h1 className=' text-xl sm:text-4xl text-center text-white '>The best trading company based in Canada,Rwanda and Burundi </h1>
        <p className=' text-gray-300 flex max-w[300px] mx-auto mt-8 items-center text-xl sm:text-2xl  '>We put our best foot forward to be the most efficient
     and professional company in the industry, while promptly
      delivering only the highest quality products and services. </p>
     </div>
    </div>
   
     </div>
    </div>
  )
}

export default Header