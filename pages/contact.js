import React from 'react'
import Header from '../components/Header'
import SocialIcon from '../components/SocialIcon'
import discordIcon from '../images/discord.png'
import facebookIcon from '../images/facebook.png'
import youtubeIcon from '../images/youtube.png'

const Contact = () => {
    return (
        <div className='min-h-screen font-mono text-gray-800'>
            <Header />
            <h1 className='text-2xl mt-2 text-center'>Contact me:</h1>
            <div className='flex justify-center items-center'>
                <SocialIcon image={ facebookIcon } url="https://www.facebook.com/azeriru.01" />
                <SocialIcon image={ youtubeIcon } url="https://www.youtube.com/c/AzerirusMusicCover" />
                <SocialIcon image={ discordIcon } url="https://discord.com/invite/v7xn7v" />

            </div>
        </div>
    )
}

export default Contact