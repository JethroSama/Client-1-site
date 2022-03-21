import React from 'react'
import { HomeIcon, CollectionIcon, ChatIcon, MusicNoteIcon } from '@heroicons/react/outline'
const Header = () => {
    return (
        <div className='md:flex items-center space-y-3 md:space-y-0 bg-white py-3 shadow-md'>
            <div className='justify-center flex items-center space-x-1 text-lg md:text-xl md:pl-10'><MusicNoteIcon height="20" width="20" /><h1>Azeriru's Music Library</h1> </div>

            <div className='flex text-sm md:text-md flex-1 space-x-10 justify-center'>
                {/* About */ }
                <div className='cursor-pointer flex items-center hover:text-gray-700 transition-colors ease-out space-x-1 group'><HomeIcon className='group-hover:animate-bounce' height="18" width="18" /> <p>About</p></div>
                {/* Music Sheets */ }
                <div className='cursor-pointer flex items-center hover:text-gray-700 transition-colors ease-out space-x-1 group'><CollectionIcon className='group-hover:animate-bounce' height="18" width="18" /><p>Music Sheets</p></div>
                {/* Contact me */ }
                <div className='cursor-pointer flex items-center hover:text-gray-700 transition-colors ease-out space-x-1 group'> <ChatIcon className='group-hover:animate-bounce' height="18" width="18" /><p>Contact me</p></div>
            </div>
        </div>
    )
}

export default Header