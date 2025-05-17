import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products}) => {
    return (
        <div className=' sm:mx-0 md:mx-8 grid grid-col-1 sm:grid-cols-4 lg:grid-cols-4 '>
            {products.map ((product , index) => (
                <Link to={`/products/${product.id}`} key={index} className='p-4'>
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='w-full h-96 mb-4'>
                            <img className='w-full h-full rounded-lg object-cover' src= {product.image.url} alt={product.image.alt} />
                        </div>
                        <h3 className='mb-2 text-sm'>{product.name}</h3>
                        <p className='text-gray-500 font-medium text-sm tracking-tighter'>
                            ${product.price}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductGrid