import React, { useState } from 'react'
import { CartState } from '../../store/Context'
import Dropdown from './Dropdown'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const Header = ({ toggleMenu, nav }) => {
    const { state: { cart }, prodDispatch } = CartState()
    const searchHandler = (e) => {
        prodDispatch({ type: 'SEARCH_QUERY', payload: e.target.value })

    }


    return (
        <nav className=' bg-gray-800 w-full max-h-[10vh] flex px-6 py-4'>

            <main className='w-[1024px] m-auto flex text-white items-center justify-between h-full '>
                <aside className=' px-1 sm:px-3'>
                    {
                        !nav ? <GiHamburgerMenu className='md:hidden text-3xl ' onClick={toggleMenu} /> :
                            <ImCross className='md:hidden text-2xl' onClick={toggleMenu} />

                    }
                </aside>


                <section className='text-lg tracking-wide font-sans font-semibold sm:text-2xl'>Shopping Cart</section>
                <input type="search" placeholder='Search a product' className='rounded-md hidden sm:block  sm:px-6 sm:py-[10px] h-2/3 text-black w-[30%]  sm:w-[50%] font-semibold' onChange={searchHandler} />
                <Dropdown cart={cart} />
            </main>


        </nav>
    )
}

export default Header