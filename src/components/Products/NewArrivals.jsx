import React, { useRef, useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollStart, setScrollStart] = useState(0);

    const newArrivals = [
        {
            id: '1',
            name: 'Stylish Jacket',
            price: 120,
            images: [{ url: 'https://picsum.photos/200/300?random=1', alt: 'Stylish Jacket' }],
        },
        {
            id: '2',
            name: 'Stylish Jacket',
            price: 120,
            images: [{ url: 'https://picsum.photos/200/300?random=2', alt: 'Stylish Jacket' }],
        },
        {
            id: '3',
            name: 'Stylish Jacket',
            price: 120,
            images: [{ url: 'https://picsum.photos/200/300?random=3', alt: 'Stylish Jacket' }],
        },
        {
            id: '4',
            name: 'Stylish Jacket',
            price: 120,
            images: [{ url: 'https://picsum.photos/200/300?random=4', alt: 'Stylish Jacket' }],
        },
        {
            id: '5',
            name: 'Stylish Jacket',
            price: 120,
            images: [{ url: 'https://picsum.photos/200/300?random=5', alt: 'Stylish Jacket' }],
        },
        {
            id: '6',
            name: 'Stylish Jacket',
            price: 120,
            images: [{ url: 'https://picsum.photos/200/300?random=6', alt: 'Stylish Jacket' }],
        },
    ];

    const handleScroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = container.offsetWidth / 1.2;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        updateScrollButtons();
        container.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);

        return () => {
            container.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, []);

    const handleOnMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollStart(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollStart - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <section className='flex flex-center flex-col py-16 px-8'>
            <div className='container mx-auto text-center mb-10 relative'>
                <h2 className='text-3xl font-bold mb-4'>New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8'>
                    Discover the latest styles and trends in our new arrivals collection.
                </p>
                <div className='absolute right-0 bottom-[-30px] md:mr-6 sm:mr-1 flex space-x-2'>
                    <button
                        className='p-2 rounded border bg-white text-black disabled:opacity-30'
                        onClick={() => handleScroll('left')}
                        disabled={!canScrollLeft}
                    >
                        <FiChevronLeft className='text-2xl' />
                    </button>
                    <button
                        className='p-2 rounded border bg-white text-black disabled:opacity-30'
                        onClick={() => handleScroll('right')}
                        disabled={!canScrollRight}
                    >
                        <FiChevronRight className='text-2xl' />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className='container mx-auto overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing'
                onMouseDown={handleOnMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div className='flex space-x-6'>
                    {newArrivals.map((product) => (
                        <div
                            key={product.id}
                            className='min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] relative'
                        >
                            <img
                                className='w-full object-cover h-[400px] rounded-lg'
                                src={product.images[0]?.url}
                                alt={product.images[0]?.alt}
                                draggable  = {false}
                            />
                            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg'>
                                <Link to={`/product/${product.id}`} className='block'>
                                    <h4 className='font-medium'>{product.name}</h4>
                                    <p>${product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;
