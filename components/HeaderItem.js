import Link from 'next/link'
import React from 'react'

const HeaderItem = ({ text, Icon, active, url }) => {
    return (
        <Link href={ url }>
            <div className={ `cursor-pointer flex items-center hover:text-blue-400 transition-colors ease-out space-x-1 group ${active && 'text-blue-500'}` }>
                <Icon className='group-hover:animate-bounce' height="18" width="18" />
                <p>{ text }</p>
            </div>
        </Link>
    )
}

export default HeaderItem