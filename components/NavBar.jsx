import React from 'react'
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'
import {useStateContext} from '../context/AppStateContext';

const NavBar = () => {
const {showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <div className='w-full bg-[#ffffff]'>
    <header className='flex items-center justify-between p-5 max-w-screen-2xl mx-auto'>
       <div className='flex items-center'>
            <Link href="/">
                <span className='text-black text-xl sm:text-2xl font-normal'>CZ2M Shopping</span>
            </Link>
       </div>
       
       <div className='flex space-x-8'>
                <div className="hidden md:inline-flex items-center space-x-6">
                    <span className="cursor-pointer hover:text-lg translate-x-1 duration-700">Home</span>
                    <span className="cursor-pointer hover:text-lg translate-x-1 duration-700">Women</span>
                    <span className="cursor-pointer hover:text-lg translate-x-1 duration-700">Men</span>
                    <span className="cursor-pointer hover:text-lg translate-x-1 duration-700">Shoes</span>
                    <span className="cursor-pointer hover:text-lg translate-x-1 duration-700">Watches</span>
                    <span className="cursor-pointer hover:text-lg translate-x-1 duration-700">Membership</span>
                    <span className="cursor-pointer hover:text-lg translate-x-1 duration-700">Sign In</span>
                </div>
               <button className='text-black font-medium border-2 border-[#000] px-6 py-2 
                              rounded-full hover:bg-black hover:text-white hover:border-white'>
                   Login
               </button>
               <button type="button" onClick={()=> setShowCart(true)}>
                 <div className='relative flex'>
                    <AiOutlineShopping className='w-7 h-7'/>
                    <span className='absolute top-0 left-4 bg-black w-5 h-5 text-white rounded-full 
                             text-xs flex items-center justify-center'>{totalQuantities}</span>
                  </div>
               </button>
       </div>
    </header>
    {showCart && <Cart/> }
    </div>
  )
}

export default NavBar