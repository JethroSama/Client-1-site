import React from 'react'
import Image from 'next/image'

const SocialIcon = ({ image, url }) => {
    return (
        <div onClick={
            () => {
                // open the url in a new tab
                window.open(url, '_blank')
            }
        }>
            {/* add facebook icon */ }
            <Image height="50" width="50" src={ image } alt={ url } />
        </div>
    )
}

export default SocialIcon