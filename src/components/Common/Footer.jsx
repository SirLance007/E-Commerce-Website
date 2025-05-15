import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t p-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
                    <p className='text-gray-500 mb-4'>
                        Be the first hear about new products , exclusive events , and online offer.
                    </p>
                    <p>
                        Sign up and get 10% off your first order
                    </p>
                    {/* Newsletter Form */}
                    <form action="" className='flex'>
                        <input 
                        type="email" 
                        placeholder='Enter your Email'
                        className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all'
                        required
                        />

                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer