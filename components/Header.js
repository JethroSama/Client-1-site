import React from 'react'
import { HomeIcon, CollectionIcon, ChatIcon, MusicNoteIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import HeaderItem from './HeaderItem'

const Header = () => {
    //get the current url from the router
    const router = useRouter()
    const currentUrl = router.pathname
    const isMusicSheets = currentUrl === '/music-sheets'
    const isAbout = currentUrl === '/'
    const isContact = currentUrl === '/contact'
    return (
        <div className='md:flex items-center space-y-3 md:space-y-0 bg-white py-3 shadow-md'>
            <div className='justify-center flex items-center space-x-1 text-lg md:text-xl md:pl-10'><MusicNoteIcon height="20" width="20" /><h1>Azeriru's Music Library</h1> </div>

            <div className='flex text-sm md:text-md flex-1 space-x-10 justify-center'>
                {/* About */ }
                <HeaderItem text="About" Icon={ HomeIcon } url="/" active={ isAbout } />
                {/* Music Sheets */ }
                <HeaderItem text="Music Sheets" Icon={ CollectionIcon } url="/music-sheets" active={ isMusicSheets } />
                {/* Contact me */ }
                <HeaderItem text="Contact me" Icon={ ChatIcon } url="/contact" active={ isContact } />


            </div>
        </div>
    )
}

export default Header