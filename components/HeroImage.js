import React from 'react'
import Image from 'next/image'
import PianoImage from '../images/piano-bg.jpg'

const HeroImage = () => {
    return <div className='relative h-[30vh] md:h-[50vh] lg:h-[70vh]  '>
        <Image className='w-screen object-cover' layout='fill' src={ PianoImage } objectPosition='center' alt='heroimg' />
        <div className='absolute h-full w-full flex flex-col justify-center items-center'>
            <p className='text-sm sm:text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-white py-2 px-5 text-purple-500 rounded-full shadow-md font-bold hover:shadow-lg active:scale-90 transition-all duration-150 mt-2 md:mt-5'>Music Library</button>
        </div>
    </div>
}

export default HeroImage