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
        <div className='min-h-screen font-mono text-gray-800'>
            <Header />
            {/* Headings */ }
            <div className='mt-5 shadow-sm border-2 border-slate-50 rounded-lg max-w-xl mx-auto'>
                <div className='shadow-sm px-2'>
                    <p>Title</p>
                </div>
                <div>
                    <div className='flex group cursor-pointer justify-between items-center shadow-sm hover:shadow-md h-14 transition-all ease-out hover:bg-gray-50 px-2'>
                        <p className='text-sm'>Test1</p>
                        <button className='hidden group-hover:block border-2 rounded-lg p-1 hover:border-blue-300 hover:text-blue-400 transition-all ease-out text-sm'>Download</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MusicSheets