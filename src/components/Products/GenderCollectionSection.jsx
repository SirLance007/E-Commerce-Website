import React from 'react'
import mensCollection from '../../assets/mens-collection.webp'
import womensCollection from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
    return (
        <section className='py-16 px-5'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>
                {/* Women's Collection */}
                <div className='relative flex-1'>
                    <img className='w-full h-[700px] object-cover' src= {mensCollection} alt="Mens Picture" />
                    <div className='ml-8 absolute bottom-8 bg-white bg-opacity-90 p-4'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Women's Collection
                        </h2>
                        <Link className = "text-gray-900 underline" to = "/collections/all?gender=Women" >
                            Shop Now
                        </Link>
                    </div>
                </div>
                {/* Men's Collection */}
                <div className='relative flex-1'>
                    <img className='w-full h-[700px] object-cover' src= {womensCollection} alt="Womens Picture" />
                    <div className='ml-8 absolute bottom-8 bg-white bg-opacity-90 p-4'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Men's Collection
                        </h2>
                        <Link className = "text-gray-900 underline" to = "/collections/all?gender=Mens" >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GenderCollectionSection