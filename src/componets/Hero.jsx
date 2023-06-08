import React from 'react'
import { img3 } from '../assets'

const Hero = () => {
  return (
    <section className=" bg-gray-400 widescreen:section-min-height overflow-hidden w-screen tallscreen:section-min-height p-11  ">
    <h2 className="mb-3 text-center  font-bold text-slate-900 ">
    Solid Foundation, Marketing Presence & Resilient
    </h2>
    <h2 className="mb-3 text-center text-xl font-bold text-green-900 ">
    Global Outsourcing and Exporting
    </h2>
    <h2 className="mb-3 text-center text-3xl font-bold text-green-800 ">
    General Trading Company
    </h2>
    <ul className='flex flex-col md:flex-row flex-wrap justify-center gap-4 mt-6 '>
      <li className=''>
      <p className='font-poppins font-normal mx-6 text-dimWhite text-[20px] sm:min-w-[700px] sm:max-w-[700px]  leading-10 sm:leading-[50.8px]'>
    Big Inc is a renowned general trading Dubai company, procurement, and supply specialist with vast financial and credit prowess.

We deal with a wide range of merchandise across various sectors including energy, metal, and agricultural markets. We also boast robust relationships with leading suppliers in the world.

Additionally, Big Inc specializes in multisector procurement and supply, offering one-stop solutions to clients across the globe. We supply raw material, equipment, and machinery for construction, healthcare, transportation, mining, municipal, production & manufacturing, industrial, energy, and more.
    </p>

      </li>
      <li className=''>
      <img src={img3} alt="" className='rounded-full  w-[450px]  sm:w-[700px] object-cover  items-center' />

      </li>
    
   

    </ul>
    <hr className='bg-green-600  w-1/2 mx-auto' />
    

    
    </section>
  )
}

export default Hero