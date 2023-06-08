import React from 'react'
import Navbar from '../componets/Navbar'
import { img3 } from '../assets'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className=' w-full '>
        <div className=' '>
        <div className='flex w-full  '>
        <div className='bg-gray-800 relative w-full  max-w-full h-[550px] shadow-2xl overflow-y-hidden '>
          <img src={img3} className='w-full absolute h-full mix-blend-overlay inset-0  object-cover ' alt="" />       
      </div>
      <div className='absolute block right-0 mt-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <h1 className=' text-4xl mx-auto text-center text-white '>About Us </h1>
        <p className=' text-gray-300 flex  mx-auto mt-8 items-center text-2xl  '>We put our best foot forward to be the most efficient
     and professional company in the industry, while promptly
      delivering only the highest quality products and services.
       we place 
    our customers as the first priority in all stages of the
     product and service delivery chain. </p>
     </div>
    </div>
   
     </div>
    </div>
    </div>
  )
}

export default About