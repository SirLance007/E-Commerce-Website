import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Term:", searchTerm);
        // Optionally close the search bar after submitting
        setIsOpen(false);
        setSearchTerm("");
    }

    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 bg-white w-full h-24 z-50" : "w-auto"}`}>
            {isOpen ? (
                <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
                    <div className='relative w-1/2'>
                        <input
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder='Search'
                            value={searchTerm}
                            className='bg-gray-100 px-4 py-4 pl-2 pr-12 rounded-lg outline-none w-full placeholder:text-gray-700'
                        />
                        {/* Close (X) Icon */}
                        <button
                            type='button'
                            onClick={handleSearchToggle}
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'
                        >
                            <HiMiniXMark className='h-6 w-6' />
                        </button>
                    </div>
                </form>
            ) : (
                <button onClick={handleSearchToggle}>
                    <HiMagnifyingGlass className='h-6 w-6' />
                </button>
            )}
        </div>
    )
}

export default SearchBar;
