import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'

const placeholderProducts = [
        {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: {
                url: 'https://picsum.photos/400/500?random=1',
                alt: 'Placeholder Image 1'
            }
        },
        {
            id: 2,
            name: 'Product 2',
            price: 39.99,
            image: {
                url: 'https://picsum.photos/400/500?random=2',
                alt: 'Placeholder Image 2'
            }
        },
        {
            id: 3,
            name: 'Product 3',
            price: 49.99,
            image: {
                url: 'https://picsum.photos/400/500?random=3',
                alt: 'Placeholder Image 3'
            }
        },
        {
            id: 4,
            name: 'Product 4',
            price: 59.99,
            image: {
                url: 'https://picsum.photos/400/500?random=4',
                alt: 'Placeholder Image 4'
            }
        },
        {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: {
                url: 'https://picsum.photos/400/500?random=5',
                alt: 'Placeholder Image 1'
            }
        },
        {
            id: 2,
            name: 'Product 2',
            price: 39.99,
            image: {
                url: 'https://picsum.photos/400/500?random=6',
                alt: 'Placeholder Image 2'
            }
        },
        {
            id: 3,
            name: 'Product 3',
            price: 49.99,
            image: {
                url: 'https://picsum.photos/400/500?random=7',
                alt: 'Placeholder Image 3'
            }
        },
        {
            id: 4,
            name: 'Product 4',
            price: 59.99,
            image: {
                url: 'https://picsum.photos/400/500?random=8',
                alt: 'Placeholder Image 4'
            }
        }
    ]

const Home = () => {

    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />

            {/* Best Seller */}
            <h2 className='text-3xl text-center font-bold mb-4 '>
                Best Seller
            </h2>
            <ProductDetails />

            <div className='container mx-auto'>
                    <h2 className='text-3xl text-center mb-4 font-bold'>
                        Top Wear's for women
                    </h2>
                <ProductGrid products={placeholderProducts} />
            </div>
            <FeaturedCollection />
            <FeaturesSection />
        </div>
    )
}

export default Home