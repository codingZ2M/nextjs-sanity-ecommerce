import React, {useRef} from 'react'
import Link from 'next/link'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';
import {toast} from 'react-hot-toast';
import {useStateContext} from '../context/AppStateContext';
import { urlFor } from '../lib/sanity';

const Cart = () => {
  const cartRef = useRef();
  const {qty,totalPrice, totalQuantities, cartItems, setShowCart, 
          toggleCartItemQuantity, removeCartItem} = useStateContext();

  return (
    <div className='absolute p-4 top-0 right-0 z-20 bg-white w-11/12 sm:w-1/4 h-full border-none drop-shadow-xl' ref={cartRef}>
      <div className=''>
        <button type="button" className="flex items-center justify-center gap-2" onClick={()=> setShowCart(false)} >
            <AiOutlineLeft/>
            <span className='text-small font-medium'>Cart ({totalQuantities}) items</span>
        </button>
      </div>   
        { cartItems.length < 1 && (
          <div className='flex flex-col items-center justify-center'>
             <AiOutlineShopping className='w-20 h-20 text-gray-300'/>
             <span>Your Shopping cart is empty!</span>
             <Link href="/">
                <button type="button" onClick={()=>setShowCart(false)}
                className='my-8 flex items-center justify-center w-40 sm:w-60 text-white bg-black font-medium border-[1px] border-[#fff]  py-2.5
                         hover:bg-white hover:text-black hover:border-black'>
                  Continue Shopping
                </button>
             </Link>
          </div>
        )}

        <div className='mt-4 w-full text-base font-normal'>
            {cartItems.length >= 1 && cartItems.map((product)=> (
              <div className='flex py-2  items-start justify-between' key={product._id}>
                <div className='flex gap-3'>
                    <img src={urlFor(product.image[0]).url()} width={80} height={120}/>
                    <div className='flex flex-col  justify-between'>
                        <span className='w-68'>{product.name}</span>
                        <div className='flex gap-4 items-center justify-center border border-gray-400 w-24 py-1 '>
                          <span onClick={()=> toggleCartItemQuantity(product._id, "decrement")}><AiOutlineMinus/></span>
                          <span onClick="">{product.quantity}</span>
                          <span onClick={()=> toggleCartItemQuantity(product._id, "increment")}><AiOutlinePlus/></span>
                        </div>
                        <button type='button' onClick={()=> {removeCartItem(product)}}>
                            <RiDeleteBinLine className="w-7 w-7 text-red-500" />
                        </button>
                    </div> 
                </div>
                
                <div className='flex  items-start '>
                    <span>${product.price * product.quantity}.00</span>
               </div>
              </div>
            ))}

            {cartItems.length >= 1 && (
              <div className='mt-6 flex flex-col'>
                <div className='flex items-center justify-between text-SM font-medium'>
                <span>Sub Total:</span>
                <span>${totalPrice}.00</span>
                </div>
                <div className='flex justify-center py-4'>
                <button className='flex items-center justify-center w-full text-black bg-white font-medium border-[1px] border-[#000]  py-2.5
                               hover:bg-black hover:text-white hover:border-black'
                               onClick="">
                  PAY NOW
                </button>
                </div>
              </div>
            )}
        </div>
      </div>
  )
}

export default Cart