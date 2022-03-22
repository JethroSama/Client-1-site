import React from 'react'

const TableItem = ({ title, url }) => {
    return (
        <div className='flex group cursor-pointer justify-between items-center shadow-sm hover:shadow-md h-14 transition-all ease-out hover:bg-gray-50 px-2'>
            <p className='text-sm'>{ title }</p>
            <button onClick={ () => {
                // open the url in a new tab
                window.open(url, '_blank')
            } } className='hidden group-hover:block border-2 rounded-lg p-1 hover:border-blue-300 hover:text-blue-400 transition-all ease-out text-sm'>Download</button>
        </div>
    )
}

export default TableItem