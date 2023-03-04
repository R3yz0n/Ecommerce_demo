import React, { useState } from 'react'
import Rating from './Rating'

const Filters = () => {
    const [rate, setRate] = useState(3);
    const onClick = (i) => setRate(i)

    return (
        <section className='md:w-64 px-4 py-6 bg-gray-700 text-white h-[85vh]'>

            <h1 className='text-2xl md:text-2xl font-sans font-semibold pb-3'>Filter Products</h1>
            <div>
                <p className='py-2  font-mono flex gap-2'>
                    <input className='cursor-pointer' type="radio" name='group1' />
                    <span>Ascending</span>
                </p>
                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="radio" name='group1' />
                    <span>Descending</span>
                </p>

                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="checkbox" />
                    <span>Include out of stock</span>
                </p>

                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="checkbox" />
                    <span>Fast Delivery only</span>
                </p>
                <p className='flex'>
                    <span className='py-2 pr-2'>Rating:</span>
                    <Rating rating={rate} onClick={onClick} />

                </p>

                <button className='text-black bg-white w-[80%] rounded-md mt-3  py-1 font-semibold hover:opacity-80'>Clear Filters</button>

                <p>add discount at 10%</p>

            </div>

        </section>
    )
}

export default Filters