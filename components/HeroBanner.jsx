import React from 'react'
import { urlFor } from '../lib/sanity'

const HeroBanner = ({bannerData}) => {
  return (
    <div className='static'>
      <img className='w-full h-full brightness-75'
           src={urlFor(bannerData.image).url()} alt="hero-image"/>
      <div className="absolute top-28 sm:top-80 left-6 sm:left-48  z-10 text-white flex flex-col gap-4 sm:gap-12">
       <div className='flex flex-col gap-0 sm:gap-2'>
        <h3 className='text-2xl sm:text-7xl'>{bannerData.product}</h3>
        <p className='text-base sm:text-2xl'>{bannerData.desc}</p>
       </div>
       <div className='flex flex-col gap-0 sm:gap-2'>
        <p className='text-2xl sm:text-5xl'>{bannerData.discount}</p>
        <p className='text-base sm:text-2xl'>{bannerData.saleTime}</p>
        <button className='hidden sm:flex items-center justify-center mt-10 w-60 text-white font-medium border-2 border-[#fff] px-6 py-2.5
                              rounded-full hover:bg-black hover:text-white hover:border-white'>
                  {bannerData.buttonText}
        </button>
      </div>
      </div>
    </div>
  )
}

export default HeroBanner