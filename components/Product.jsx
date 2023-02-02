import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'

const Product = ({product:{image, name, slug, price}}) => {
  return (
    <div className='flex flex-col  group justify-center items-center'>
        <Link href={`/product/${slug.current}`}>
                <img src={urlFor(image && image[0]).url()}  
                        alt="product-image" width={334} height={500}
                        className="pb-6 object-cover 
                        group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
        </Link>
        <span className='uppercase text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap'>{name}</span>
        <span className='uppercase text-sm font-normal'>${price}.00</span>
    </div>
  )
}

export default Product