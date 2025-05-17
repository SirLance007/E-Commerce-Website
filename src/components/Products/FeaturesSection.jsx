import React from 'react'
import {HiOutlineCreditCard, HiShoppingBag} from 'react-icons/hi'
import {HiArrowPathRoundedSquare} from 'react-icons/hi2'

const FeaturesSection = () => {
    return (
        <section>
            <div className='py-16 bg-white px-4'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full mb-4">
                            <HiArrowPathRoundedSquare className ="text-xl " />
                        </div>
                        <h4 className="tracking-tighter mb-2 ">
                            45 Days Return
                        </h4>
                        <p className='text-gray-600 text-sm tracking-tighter'>
                            Money back guarantee
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full mb-4">
                            <HiShoppingBag className ="text-xl " />
                        </div>
                        <h4 className="tracking-tighter mb-2 ">
                            FREE INTERNATIONAL SHIPPING
                        </h4>
                        <p className='text-gray-600 text-sm tracking-tighter'>
                            on all order over $100
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-center">
                        <div className="p-4 rounded-full mb-4 cursor-pointer">
                            <HiOutlineCreditCard className ="text-xl  " />
                        </div>
                        <h4 className="tracking-tighter mb-2 ">
                            SECURE CHECKOUT 
                        </h4>
                        <p className='text-gray-600 text-sm tracking-tighter'>
                            100% Secure Checkout Process
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection