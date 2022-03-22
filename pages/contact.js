import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import discordIcon from '../images/discord.png'
import facebookIcon from '../images/facebook.png'
import youtubeIcon from '../images/youtube.png'

const Contact = () => {
    return (
        <div className='min-h-screen font-mono text-gray-800'>
            <Header />
            <h1 className='text-2xl mt-2 text-center'>Contact me:</h1>
            <div>
                <div>
                    {/* add facebook icon */ }
                    <Image height="50" width="50" src={ facebookIcon } alt='facebook' />
                </div>
            </div>
        </div>
    )
}

export default Contact