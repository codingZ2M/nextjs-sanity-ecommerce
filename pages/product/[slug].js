import React from 'react'
import NavBar from '../../components/NavBar'
import Product from '../../components/Product'
import {sanityClient, urlFor} from '../../lib/sanity'
import {AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useStateContext} from '../../context/AppStateContext'


const ProductDetails = ({ product, products}) => {
    const {name, image, details, price } = product;
    const {addProduct, decQty, incQty, qty} = useStateContext();

  return (
    <div className='w-full bg-[#FFFFFF] h-full'>
       <NavBar/>
       <div className="mt-6 flex gap-2 sm:gap-20 flex-col sm:flex-row items-center justify-center m-auto bg-white text-black ">
          <div className=''>
              <img src={urlFor(image && image[0]).url()} className="rounded-lg"/>
          </div>
          <div className='flex flex-col items-start space-y-4 font-verdana p-10 w-full sm:w-1/3 text-justify'>
              <span className='text-xl sm:text-2xl'>{name}</span>
              <div className='flex  items-center justify-center gap-1 text-red-600'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                <span className='text-black text-sm'>(201)</span>
              </div>
              <span className='text-sm'>{details}</span>
              <span className='text-xl'>${price}.00</span>
              <span>Quanity</span>
              <div className='flex gap-4 items-center justify-center border border-gray-400 w-28 py-1 '>
                <span onClick={decQty}><AiOutlineMinus/></span>
                <span onClick="">{qty}</span>
                <span onClick={incQty}><AiOutlinePlus/></span>
              </div>
              <div className='flex gap-4'>
                <button className='flex items-center justify-center w-40 sm:w-60 text-black bg-white font-medium border-[1px] border-[#000000]  py-2.5
                               hover:bg-black hover:text-white hover:border-white'
                               onClick={()=> addProduct(product, qty) }
                               >
                  ADD TO CART
                </button>
                <button className='flex items-center justify-center w-40 sm:w-60 text-white bg-black font-medium border-[1px] border-[#fff]  py-2.5
                               hover:bg-white hover:text-black hover:border-black'>
                  BUY NOW
                </button>
              </div>
          </div>
      </div>


      {/* Similar Products Container  */}
      <div className='mt-2 sm:mt-20 w-full flex flex-col items-center justify-center'>
        <h2 className='flex justify-start items-start text-xl sm:text-2xl mt-6 sm:mt-12'> Similar Produts </h2>
        <div className='my-6 sm:my-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            products.map((product) => (
              <Product product = {product} key={product._id}/>
            ))
          }
        </div>
      </div>  
      
    </div>
  )
}

export default ProductDetails

export const getStaticPaths = async () => {
    const query = `*[_type == "post"] {
        _id,
        slug {
            current
        }
    }`;

  const  products = await sanityClient.fetch(query);

  const paths = products.map( (product) => ({
    params: {
             slug:product.slug.current
            }
  }));
  return {
    paths,
     // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
    fallback: "blocking",  // can also be true or 'blocking'
  };
};


export const getStaticProps = async ({params: {slug}}) => {
    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await sanityClient.fetch(productQuery);
    
    const productsQuery = `*[_type == "product"]`;
    const products = await sanityClient.fetch(productsQuery);

    return{
      props: { product, products}
    }
  }