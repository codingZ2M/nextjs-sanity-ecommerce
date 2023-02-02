import React from 'react'
import Product from '../components/Product'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import PromoBanner from '../components/PromoBanner'
import Footer from '../components/Footer'
import {sanityClient} from '../lib/sanity'
import { ProductModel, BannerModel, PromoBannerModel } from '../typings'

/*
interface PropProducts {
  products: [ProductModel];
}
interface PropBanner {
  bannerData: [BannerModel];
}
interface PropPromoBanner {
  promoBannerData: [PromoBannerModel];
}
*/
const Home = (props:any) => {
  const {products, bannerData, promoBannerData} = props;
  
  console.log(bannerData);
  console.log(products);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">  
        <NavBar/>
        <HeroBanner bannerData = {bannerData.length && bannerData[0]}/>
        <h2 className='flex justify-start items-start text-xl sm:text-2xl mt-6 sm:mt-12'> Trending Products</h2>
        <div className='my-6 sm:my-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         
          {
            products.map((product) => (
              <Product product = {product} key={product._id}/>
            ))
          }
        </div>
      
      <PromoBanner promoBannerData={promoBannerData.length && promoBannerData[0]}/>

      <Footer/>
  </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const productsQuery = `*[_type == "product"]`
  const products = await sanityClient.fetch(productsQuery);
  
  const bannerQuery = `*[_type == "banner"]`
  const bannerData = await sanityClient.fetch(bannerQuery);

  const promoBannerQuery = `*[_type == "promobanner"]`
  const promoBannerData = await sanityClient.fetch(promoBannerQuery);

  return{
    props: { products, bannerData, promoBannerData}
  }
}