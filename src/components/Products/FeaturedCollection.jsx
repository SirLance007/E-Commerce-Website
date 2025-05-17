import React from 'react'
import { Link } from 'react-router-dom'
import featured from '../../assets/featured.webp'

const FeaturedCollection = () => {
    return (
        <section className='py-16 px-10'>
            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl'>
                {/* Left Content */}
                <div className='lg:w-1/2 p-8 text-center lg:text-left'>
                    <h2 className='text-lg font-semibold mb-2 text-gray-700'>
                        Comfort with Style
                    </h2>
                    <h2 className='text-4xl lg:text-5xl font-bold  mb-6 '>
                        Apparel made for everyday life 
                    </h2>
                    <p className='text-lg text-gray-600 mb-6'>
                        Discover our latest collection of apparel designed for comfort and style. 
                        Perfect for any occasion, our pieces are made with high-quality materials 
                        to ensure a perfect fit and feel.
                    </p>
                    <Link to="/collections/all" className = "bg-black text-white px-4 py-3 rounded-lg text-large hover:bg-gray-800">
                        Shop Now
                    </Link>
                </div>
                {/* Right Content */}
                <div className='lg:w-1/2'>
                    <img className='w-full h-full object-cover rounded-tr-lg rounded-br-lg' src= {featured} alt="Featured Collection" />
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection