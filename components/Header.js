import React from 'react'

const Header = () => {
    return (
        <div className='md:flex items-center space-y-3 md:space-y-0 bg-white py-3'>
            <h1 className='text-center text-lg md:text-xl md:pl-10'>Azeriru's Music Library</h1>

            <div className='flex text-sm md:text-md flex-1 space-x-10 justify-center'>
                {/* About */ }
                <p className='cursor-pointer hover:text-gray-400 transition-colors ease-out '>About</p>
                {/* Music Sheets */ }
                <p className='cursor-pointer hover:text-gray-400 transition-colors ease-out'>Music Sheets</p>
                {/* Contact me */ }
                <p className='cursor-pointer hover:text-gray-400 transition-colors ease-out'>Contact me</p>
            </div>
        </div>
    )
}

export default Header