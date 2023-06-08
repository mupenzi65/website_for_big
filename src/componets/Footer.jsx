import React from 'react'
import styles from '../constants/style'
import { logo } from "../assets"
import { footerLinks,socialMedia } from "../constants"

const Footer = () => (
    <section className={`${styles.flexCenter}
    ${styles.paddingY} flex-col bg-slate-900 p-3 pt-7`}>
      <div className={`${styles.flexStart} md:flex-row 
      flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col 
        justify-start mr-10">
          <img src={logo} alt="bank"className="w-[86px] h-[83px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w[250px]`}>
          At BIG, we are one of the most reputable international general trading
            company that represents leading manufacturers and suppliers on an  international scale.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row 
        justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink)=>(
             <div key={footerlink.key} className="flex flex-col ss:my-0 my-4 min-w[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[72px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link,index)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px]
                   leading-[24px] text-white hover:text-green-600 cursor-pointer
                   ${index!==footerlink.lenght-1?'mb-4':'mb-0'}`}>
                      {link.name}
                  </li>
                ))} 
              </ul>
             </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center 
      md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white">
        Copyright 2023 BIG Inc. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social,index)=>(
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer
               ${index!==socialMedia.length-1?'mr-6':'mr-0'}`}
            />
          ))}
        </div>
      </div>

    </section>
  )


export default Footer