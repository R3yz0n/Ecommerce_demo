import React, { useEffect, useState } from 'react'
import { CartState } from '../../store/Context';
import Rating from './Rating'

const Filters = ({ nav }) => {
    const [rate, setRate] = useState(3);
    const onClick = (i) => setRate(i);
    const { prodState: { byStock, byFastDelivery, byRating, sort }, prodDispatch, voucher } = CartState();




    return (
        <section className={` absolute top-[1px] left-0 md:block md:static md:w-64 px-4 py-6 bg-gray-700 text-white h-[85vh] z-50 duration-1000 ${nav ? 'ml-0' : 'ml-[-90%]'}`}>

            <h1 className='text-2xl md:text-2xl font-sans font-semibold pb-3'>Filter Products</h1>
            <div>
                <p className='py-2  font-mono flex gap-2'>
                    <input className='cursor-pointer' type="radio" name='group1' onChange={() => { prodDispatch({ type: 'BY_PRICE', payload: 'lowToHigh' }) }}
                        checked={sort === 'lowToHigh' ? true : false} />
                    <span>Ascending</span>
                </p>
                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="radio" name='group1' onChange={() => { prodDispatch({ type: 'BY_PRICE', payload: 'highToLow' }) }}
                        checked={sort === 'highToLow' ? true : false} />
                    <span>Descending</span>
                </p>

                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="checkbox" onChange={() => { prodDispatch({ type: 'BY_STOCK' }) }} checked={byStock} />
                    <span>Include out of stock</span>
                </p>

                <p className='py-2    flex gap-2'>
                    <input className='cursor-pointer' type="checkbox" onChange={() => { prodDispatch({ type: 'BY_DELIVERY' }) }} checked={byFastDelivery} />
                    <span>Fast Delivery only</span>
                </p>

                <p className='py-2'>
                    <select className='text-black px-1 rounded py-[2px]' onChange={(e) => prodDispatch({ type: 'BY_CATEGORY', payload: e.target.value })}>
                        <option disabled selected hidden>Choose category</option>
                        <option>Electronics</option>
                        <option>Clothings</option>
                        <option>Shoes</option>
                        <option>Books</option>
                    </select>
                </p>

                <p className='flex'>
                    <span className='py-2 pr-2'>Rating:</span>
                    <Rating rating={byRating} onClick={(i) => { prodDispatch({ type: 'BY_RATING', payload: i }) }} />

                </p>

                <button className='text-black bg-white w-[80%] rounded-md mt-3  py-1 font-semibold hover:opacity-80' onClick={() => { prodDispatch({ type: 'CLEAR_FILTERS' }) }}>Clear Filters</button>





            </div>

        </section>
    )
}

export default Filters