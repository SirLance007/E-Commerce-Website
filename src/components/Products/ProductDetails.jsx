import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const ProductDetails = () => {
    const [mainImage , setmainImage] = useState("");
    const [selectedSize , setSelectedSize] = useState("");
    const [selectedColor , setSelectedColor] = useState("");
    const [quantity , setQuantity] = useState(1);
    const [isButtonDisabled , setIsButtonDisabled] = useState(false);

const handleQuantityChange = (action) => {
    if( action === "plus"){
        setQuantity((prev) => prev + 1);
    }
    if( action === "minus"){
        if(quantity > 1){
            setQuantity((prev) => prev - 1);
        }
    }
};

const handleAddToCart = () => {
    if(!selectedSize || !selectedColor){
        toast.error("Please select size and color before adding to cart." , {duration : 1000 ,});
        return;
    }
    setIsButtonDisabled(true);

    setTimeout (() => {
        toast.success("Product added to cart!" , {duration : 1000});
        setIsButtonDisabled(false);
    } , 500);
};

    useEffect( () => {
        if(selectedProduct?.images.length > 0){
            setmainImage(selectedProduct.images[0].url);
        }
    } , setmainImage)

    const selectedProduct = { 
        name : 'Stylish Jacket',
        price : 120,
        originalPrice : 150,
        description : 'This is a stylish jacket made from high-quality materials. Perfect for any occasion.',
        brand: 'Levis',
        material : 'Leather',
        sizes : ['S', 'M', 'L', 'XL'],
        colors : ['Red', 'Blue', 'Green'],
        images : [
            { url: 'https://picsum.photos/400/500?random=1', alt: 'Stylish Jacket' },
            { url: 'https://picsum.photos/400/500?random=2', alt: 'Stylish Jacket' },
            { url: 'https://picsum.photos/400/500?random=3', alt: 'Stylish Jacket' },
        ],
    }

    const similarProducts = [
        {
            id : 1,
            name : 'Casual Shirt',
            price : 750,
            image : {
                url : "https://picsum.photos/400/500?random=1",
                alt : "Casual Shirt"
            }
        },
        {
            id : 2,
            name : 'Casual Jacket',
            price : 650,
            image : {
                url : "https://picsum.photos/400/500?random=2",
                alt : "Casual Jacket"
            }
        },
        {
            id : 3,
            name : 'Pink Shirt',
            price : 250,
            image : {
                url : "https://picsum.photos/400/500?random=3",
                alt : "Casual Shirt"
            }
        },
        {
            id : 4,
            name : 'White Shirt',
            price : 350,
            image : {
                url : "https://picsum.photos/400/500?random=4",
                alt : "Casual Shirt"
            }
        },
    ]
    return (
        <div className=' sm:p-4 md:p-6 lg:pd-2'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row '>
                    {/* Left Thumbnails */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.alt}
                                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                                onClick={ () => setmainImage(image.url)}
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={mainImage} alt="Main Product" className='w-full h-[35rem] object-cover rounded-lg '/>
                        </div>
                    </div>
                    {/* Mobile Thumbnail */}
                    <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.alt}
                                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                                onClick={ () => setmainImage(image.url)}
                            />
                        ))}
                    </div>

                    {/* Right Side  */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl font-bold md:text-3xl mb-2'>
                            {selectedProduct.name}
                        </h1>
                        <p className='text-lg text-gray-600 mb-1 line-through'>
                            ${selectedProduct.originalPrice}
                        </p>
                        <p className='text-xl text-gray-500 mb-2'>
                            ${selectedProduct.price}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {selectedProduct.description}
                        </p>
                        <div className='mb-4'>
                            <p className='text-gray-700'>
                                Color :
                            </p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color, index) => (
                                    <button
                                        key={color}
                                        className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? 'border-black border-4' : 'border-gray-300'}`}
                                        style={{ backgroundColor: color.toLocaleLowerCase() , filter: 'brightness(0.5)'}}
                                        onClick={ () => setSelectedColor(color) }
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <p className='text-gray-700 '>
                                Size : 
                            </p>
                            <div className=' flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        onClick={ () => setSelectedSize(size) }
                                        key={size}
                                        className={`rounded border px-4 py-2 cursor-pointer ${selectedSize === size ? 'bg-black text-white': ''}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-6'>
                            <p className='text-gray-700'>
                                Quantity
                            </p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button onClick={ () => handleQuantityChange("minus")} className='px-2 py-1 bg-gray-200 border rounded text-lg'>
                                    -
                                </button>
                                <span>
                                    {quantity}
                                </span>
                                <button onClick={() => handleQuantityChange("plus")} className='px-2 py-1 border bg-gray-200 rounded text-lg'>
                                    +
                                </button>
                            </div> 
                        </div>
                        <button disabled = {isButtonDisabled} onClick={handleAddToCart} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? " cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}> {isButtonDisabled ? "Adding..." : "ADD TO CART"}</button>
                        <div className='mt-10 text-gray-600'>
                            <h3 className='text-xl font-bold mb-4 '> Characteristics : </h3>
                            <table className='w-full text-left text-sm text-gray-600 '>
                                <tbody>
                                    <tr>
                                        <td className='py-1'></td>
                                        <td className='py-2'>{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'></td>
                                        <td className='py-2'>{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                        <h2 className='text-2xl text-center font-medium mb-4'>
                            You may also like 
                        </h2>
                        <ProductGrid products = {similarProducts}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails