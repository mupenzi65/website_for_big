import React from 'react'
import { logo,close,menu } from '../assets'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    const navigation = useNavigate();
  return (
    <nav  className='bg-slate-900 flex items-center header sticky top-0 z-10 container   '>
        <div className='flex flex-[0.5] w-full'>
        <a href=""> <img className='h-[130px] object-cover hover:scale-105' src={logo} alt="big inc" /></a>

        </div>
        <div className='  flex-[0.4] justify-center md:block hidden min-w[890p] w-full '>
        <ul className='flex   justify-end items-center list-none text-xl  text-white ' >
            <li className='hover:text-green-400 mr-8 flex whitespace-nowrap'>
                <NavLink to='/' >Home</NavLink>
               
            </li>
            <li className='hover:text-green-400 mr-8 whitespace-nowrap'>
            <NavLink to='/' >About Us</NavLink>
                
            </li>
            <li className='hover:text-green-400 mr-8'>
                
            <NavLink to='/' >Products</NavLink>
            </li>
            <li className='hover:text-green-400 mr-8'>
            <NavLink to='/' >Services</NavLink>
            </li>
            <li className='hover:text-green-400 mr-8'>
            <NavLink to='/' >Partnership</NavLink>
            </li>
        </ul>

        </div>
        <div className='hidden md:block w-full flex-[0.1] gap-4 '>
        
            <a className='' href="contact"><button onClick={()=>navigation("/Contact")}  className=' flex justify-end  rounded-full   bg-blue-gradient  text-black text-xl px-4 py-4 whitespace-nowrap mr-2 '>Contact Us</button></a>
        </div>
        <div className='md:hidden flex flex-1 justify-end items-center mr-2 text-white'>
            <img src={toggle ? close:menu} alt="" className='w-[26px]' onClick={()=>setToggle((prev)=>!prev)} />
            <div className={`${toggle ? 'flex':'hidden'} bg-slate-800 top-10 rounded-3xl right-5 mx-4 my-2  min-w-[140px] px-4 py-4 items-center absolute`} >
                <ul>
                <li className='hover:text-green-400 mt-2 flex whitespace-nowrap'>
                <a  href="home">Home</a>
            </li>
            <li className='hover:text-green-400 mt-2 whitespace-nowrap'>
                <a href="">About Us</a>
            </li>
            <li className='hover:text-green-400 mt-2'>
                <a href="">Products</a>
            </li>
            <li className='hover:text-green-400 mt-2'>
                <a href="">Services</a>
            </li>
            <li className='hover:text-green-400 mt-2'>
                <a href="">Partnership</a>
            </li>
            <li className='hover:text-green-400 mt-2'>
                <a href="contact">Contact Us</a>
            </li>
                   
                </ul>
            </div>

        </div>
        
        
       
    </nav>
    
  )
}

export default Navbar