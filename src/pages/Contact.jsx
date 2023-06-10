import React from 'react'
import Navbar from '../componets/Navbar'
import { contact,contact2 } from '../assets'
import PinDropIcon from '@mui/icons-material/PinDrop';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from '../componets/Footer';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className=' '>
        <div className='flex w-full  '>
        <div className='bg-gray-800 relative w-full  max-w-full h-[550px] shadow-2xl overflow-y-hidden '>
          <img src={contact} className='w-full absolute h-full mix-blend-overlay inset-0  object-cover ' alt="" />       
      </div>
      <div className='absolute block right-0 sm:mt-[60px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <h1 className=' text-xl sm:text-4xl text-center text-white lg:mb-[350px]'>Contact Us </h1>
        <p className=' text-gray-300 flex max-w[300px] mx-auto mt-8 items-center text-xl sm:text-2xl  '> </p>
     </div>
    </div>
     </div>
     <div className='bg-gray-700 flex  flex-col sm:flex-row flex-wrap  justify-center flex-[0.5]  '>
      <ul>
      <h1   className='text-gradient mt-5 font-poppins block'>CONTACT US</h1>
      <img src={contact2} alt="" className='rounded-3xl' />
      <div className=' flex flex-row p-8 gap-8 '>
      <PinDropIcon  fontSize='large' className='text-[39px]'/>
      <ul>
        <h1 className='text-gradient text-3xl mb-4'>Our office address:</h1>
        <p className='text-gradient text-3xl'>Kigali, Masoro</p>
        
      </ul>
      
     </div>
      <div className=' flex flex-row p-8 gap-8 '>
      <MarkunreadIcon  fontSize='large' className='text-[39px]'/>
      <ul>
        <h1 className='text-gradient text-3xl mb-4'>Mail Us:</h1>
        <p className='text-gradient text-3xl'>info@biginc.com</p>
        
      </ul>
      
     </div>
      <div className=' flex flex-row p-8 gap-8 '>
      <PhoneIcon  fontSize='large' className='text-[39px]'/>
      <ul>
        <h1 className='text-gradient text-3xl mb-4'>Call us for Help:</h1>
        <p className='text-gradient text-3xl'>+ 250 788 309 386</p>
        
      </ul>
      
     </div>
      </ul>
      <div className='flex  mx-8 pt-8 flex-[0.5]'>
        <ul className='mb-8'>
        <p className='mb-9 font-poppins text-white font-normal leading-8 text-[20px]'>We’re glad to discuss your organisation’s situation. So please contact us via the details below, or enter your request.</p>
      
        <p className='text-white'>If need any info <span className='text-gradient'>please contact us</span> !</p>

        </ul>
    
       
     </div>
    
     </div>
     <Footer />



    </div>
  )
}

export default Contact