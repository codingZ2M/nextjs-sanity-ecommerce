import React from 'react'
import  {BsInstagram} from "react-icons/bs";
import {TfiTwitter} from "react-icons/tfi";
import {CiFacebook} from "react-icons/ci";

const Footer = () => {
  return (
    <div className='mt-6 mb-6 sm:mt-12 sm:mb-12 w-full bg-[#ffffff] flex flex-col items-center justify-center'>
      <span className='mb-4'>© 2023 By CODINGZ2M </span>
      <div className='flex gap-6'>
        <BsInstagram/>
        <TfiTwitter/>
        <CiFacebook/>
      </div>
    </div>
  )
}

export default Footer