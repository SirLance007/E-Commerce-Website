import React, { useState } from 'react'
import CartContents from '../Cart/CartContents';
import {IoMdClose} from "react-icons/io"
const CartDrawer = ({drawerOpen , toggleCartDrawer}) => {

    return (
        <div className= {`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transition--tranform duration-300 flex flex-col z-50 ${drawerOpen ? ("translate-x-0"):("translate-x-full")}`} >
            {/* Close Button */}
            <div className='flex p-4 jsutify-end'>
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className = "h-6 w-6 text-gray-600"/>
                </button>
            </div>
            {/* Cart buttons */}
            <div className='flex-grow p-4 overflow-y-auto '>
                <h2 className='text-xl font-semibold mb-4'>
                    Your Cart
                </h2>
                <CartContents />
            </div>
            {/* Checkout Button */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button className='bg-black w-full text-white px-3 py-3 rounded-lg font-semibold hover:bg-gray-800 transition '>Checkout</button>
                <p className='text-sm tracking-tighter text-gray-500 text-center mt-2'>Shipping , taxes , and discount calculated at Checkout</p>
            </div>
        </div>
    )
}

export default CartDrawer