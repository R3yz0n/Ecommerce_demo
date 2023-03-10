import React, { useState } from 'react'
import { CartState } from '../../store/Context'
import Dropdown from './Dropdown'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = ({ toggleMenu }) => {
    const { state: { cart }, prodDispatch } = CartState()
    const searchHandler = (e) => {
        prodDispatch({ type: 'SEARCH_QUERY', payload: e.target.value })

    }


    return (
        <nav className=' bg-gray-900 w-full min-h-[11vh] flex'>

            <main className='w-[1024px] m-auto flex text-white items-center justify-between h-full '>
                <aside className='px-3'>
                    <GiHamburgerMenu size={23} className='md:hidden' onClick={toggleMenu} />
                </aside>


                {/* <section className='text-2xl tracking-wide font-sans font-semibold'>Shopping Cart</section> */}
                <input type="search" placeholder='Search a product' className='rounded-md px-4 py-2 text-black  w-[50%] font-semibold' onChange={searchHandler} />
                <Dropdown cart={cart} />
            </main>


        </nav>
    )
}

export default Header