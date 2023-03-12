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
        <nav className=' bg-gray-900 w-full h-auto py-2 flex px-2'>

            <main className='w-[1024px] m-auto flex text-white items-center justify-between h-full '>
                <aside className=' px-1 sm:px-3'>
                    <GiHamburgerMenu className='md:hidden text-xl' onClick={toggleMenu} />
                </aside>


                <section className='text-sm tracking-wide font-sans font-semibold'>Shopping Cart</section>
                <input type="search" placeholder='Search a product' className='rounded-md  px-2 sm:px-4 sm:py-2 text-black w-[30%] h-5 text-[10px] sm:w-[50%] sm:font-semibold' onChange={searchHandler} />
                <Dropdown cart={cart} />
            </main>


        </nav>
    )
}

export default Header