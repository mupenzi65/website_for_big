import React from 'react'
import { img1,img2,img3,service1,service2,service3,service4 } from '../assets'


function Business() {
  return (
    <section id='features' className=' bg-gray-500 widescreen:section-min-height tallscreen:section-min-height my-1 scroll-mt-20 p-12'>
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Products Line
      </h2>
      <p className="mt-2 text-center text-3xl text-slate-500 dark:text-slate-400">
  We specializes in a range of products and goods, including but not limited to the following:
      </p>
      <ul className='flex flex-col sm:flex-row justify-center flex-wrap gap-5 '>
        <div className='flex mb-6 mt-6 '>
        <div className='bg-gray-800 relative'>
          <img src={img1} alt="" className='w-[450px] h-[270px] mix-blend-overlay' />
        </div>
        <div className='absolute mr-[220px] flex-wrap'>
           <h1 className='text-white max-w-[170px] text-center justify-center mt-11 ml-[150px] mb-3'>Import & Export </h1>
           <p className='text-white max-w-[290px] hidden sm:block text-center text-xl justify-center  ml-[90px] mb-3'>At BIG Inc, we receive and process various shipments every month from both local and international market, including LCL, shipments, and full container</p>
        </div>

        </div>
        <div className='flex mb-6 mt-6 '>
        <div className='bg-gray-800 relative'>
          <img src={img2} alt="" className='w-[450px] h-[270px] mix-blend-overlay' />
        </div>
        <div className='absolute mr-[220px] flex-wrap'>
           <h1 className='text-white max-w-[170px] text-center justify-center mt-11 ml-[150px] mb-3'>Retail & Wholesale </h1>
           <p className='text-white max-w-[290px] hidden sm:block text-center text-xl justify-center  ml-[90px] mb-3'>We source various products locally and internationally. We can supply and distribute various type of products from different manufacturers.</p>
        </div>

        </div>
        <div className='flex mb-6 mt-6 '>
        <div className='bg-gray-800 relative'>
          <img src={img3} alt="" className='w-[450px] h-[270px] mix-blend-overlay' />
        </div>
        <div className='absolute mr-[220px] flex-wrap'>
           <h1 className='text-white max-w-[170px] text-center justify-center mt-11 ml-[150px] mb-3'>General Investment </h1>
           <p className='text-white max-w-[290px] hidden sm:block text-center text-xl justify-center  ml-[90px] mb-3'>At Big Inc ,We deal with a wide range of merchandise and industrial across various sectors including energy, metal, and construction markets.</p>
        </div>

        </div>
       
      </ul>


























     
        <hr class="mx-auto w-1/2" />
        <h2 className="mb-6 text-center p-9 text-4xl font-bold text-slate-900 mt-3 sm:text-5xl">
        Our Services
      </h2>
      <p className="mt-2 text-center text-3xl text-slate-900 ">
      We offer many services to progress!
      </p>
      <ul className='flex flex-col sm:flex-row items-center gap-4 mt-6 '>
        <li className='hover:scale-110'>
            <img src={service1} alt="" />
            <h1 className='font-dmserif text-2xl font-bold mb-1 text-white"'>Import and Export</h1>
            <p className=' text-lg italic text-slate-900 font-bold max-w-[420px] '>At BIG Inc, we receive and process various shipments every month from both local and international market, including LCL, shipments, and full container</p>
        </li>
        <li className='hover:scale-110'>
            <img src={service2} alt="" />
            <h1 className='font-dmserif text-2xl font-bold mb-1 mt-3"'>
Logistics and Shipping</h1>
            <p className=' text-lg italic text-slate-900 font-bold max-w-[420px] mt-3 '>Traderston logistics and shipping services include integrated logistics, warehouse management, ship owning, and end to end freight management.</p>
        </li>
        <li className='hover:scale-110'>
            <img src={service3} alt="" />
            <h1 className='font-dmserif text-2xl font-bold mb-1 text-white"'>Procurement</h1>
            <p className=' text-lg italic text-slate-900 font-bold max-w-[420px] '>We take pride in out distribution network, highly trustworthy in the region. Traderston delivers multiple orders in a day across the UAE and the world.</p>
        </li>
        <li className='hover:scale-110'>
            <img src={service4} alt="" />
            <h1 className='font-dmserif text-2xl font-bold mb-1 text-white"'>E-Commerce</h1>
            <p className=' text-lg italic text-slate-900 font-bold max-w-[420px] '>We offer comprehensive online solutions. Traderston optimizes product presentation & search, ecommerce consulting. We buy & sell products online at fair prices</p>
        </li>
       
      </ul>
     


    </section>
    
  )
}

export default Business