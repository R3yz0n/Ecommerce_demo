import React from 'react'

const Dropdown = (props) => {
    const attribute = {}
    return (
        <select {...props} className='w-full bg-transparent border-b-2 pt-4 pb-1 focus:outline-none px-2 rounded text-lg text-gray-300 tracking-widest' >

            <option className='bg-gray-800' selected hidden  >Choose Category</option>
            <option className='bg-gray-800'>Clothings</option>
            <option className='bg-gray-800'>Shoes</option>
            <option className='bg-gray-800'>Electronics</option>
            <option className='bg-gray-800'>Books</option>

        </select>
    )
}

export default Dropdown