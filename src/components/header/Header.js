import React from 'react'
import { CartState } from '../../store/Context'
import Dropdown from './Dropdown'

const Header = () => {
    const { state: { cart } } = CartState()
    return (
        <nav className=' bg-gray-900 w-full min-h-[11vh] flex'>

            <main className='w-[1024px] m-auto flex text-white items-center justify-between h-full '>

                <section className='text-2xl tracking-wide font-sans font-semibold'>Shopping Cart</section>
                <input type="search" placeholder='Search a product' className='rounded-md px-4 py-2 text-black  w-[50%] font-semibold' />
                <Dropdown cart={cart} />
            </main>


        </nav>
    )
}

export default Header