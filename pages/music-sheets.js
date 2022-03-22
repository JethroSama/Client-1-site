import React from 'react'
import Header from '../components/Header'
import { getMusicSheets } from '../lib/notionDb'

export async function getStaticProps() {
    const data = await getMusicSheets()
    console.log(data)
    return {
        props: {
            data
        },
    }
}
const MusicSheets = ({ data }) => {
    console.log(data)
    return (
        <div className='min-h-screen font-mono'>
            <Header />
            {/* Headings */ }
            <div>
                {/* Number */ }
                {/* Title */ }


            </div>
        </div>
    )
}

export default MusicSheets