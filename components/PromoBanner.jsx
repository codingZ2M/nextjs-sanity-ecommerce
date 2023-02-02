import React from 'react'
import { urlFor } from '../lib/sanity'

const PromoBanner = ({promoBannerData}) => {
  return (
    <div className='mt-6 sm:mt-12 w-full bg-[#ffffff]'>
      <div className="relative flex items-center justify-between p-5 max-w-screen-2xl mx-auto">
        {promoBannerData.image && (
          <img className='brightness-100 w-full h-full rounded-2xl'
            src={urlFor(promoBannerData.image).url()} alt="promo-image"/>
        )}
        
          <div className="absolute top-12 sm:top-36 right-10 sm:right-48  z-10 text-[#DD282F] flex flex-col gap-2 sm:gap-12">
            <div className='flex flex-col gap-0 sm:gap-2'>
              <h3 className='text-2xl sm:text-7xl'>{promoBannerData.product}</h3>
              <p className='text-base sm:text-xl w-80'>{promoBannerData.desc}</p>
            </div>
            <div className='flex flex-col gap-0 sm:gap-2'>
              <p className='text-2xl sm:text-5xl'>{promoBannerData.discount}</p>
              <p className='text-base sm:text-xl'>{promoBannerData.saleTime}</p>
            </div>
            <button className='text-black font-medium border-2 border-[#DD282F] px-6 py-2 
                              rounded-full hover:bg-white hover:text-[#DD282F] hover:border-[#DD282F'>
                   {promoBannerData.buttonText}
               </button>
          </div>
      </div>
    </div>
  )
}

export default PromoBanner