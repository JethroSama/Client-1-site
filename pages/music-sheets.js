import React from 'react'
import Header from '../components/Header'
import TableItem from '../components/TableItem'
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
                    { data.map(item => (
                        <TableItem key={ item.id } title={ item.title } url={ item.pdf } />
                    )) }
                </div>
            </div>
        </div>
    )
}

export default MusicSheets