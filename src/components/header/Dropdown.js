import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BsTriangleFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../../store/Context'
import { Link } from 'react-router-dom'

const Dropdown = ({ cart }) => {
    const [toggle, setToggle] = useState(false)

    const showCartHandler = (e) => {

        setToggle(!toggle)

    }

    const { dispatch } = CartState();

    return (
        <main className='relative'>

            <button className='hover:bg-green-800 bg-green-700 flex px-3 py-1 sm:py-2 rounded-sm gap-1 items-center' onClick={showCartHandler}>
                <FaShoppingCart className='text-xl md:text-2xl' />
                <span className='font-semibold'>{cart.length}</span>
                <BsTriangleFill style={{ rotate: '180deg' }} className='text-xs md:text-base' />
            </button>

            <section className={`${toggle ? 'left-[-355%] lg:left-[-350%] min-w-[19rem] max-w-[24rem] py-2  absolute  bg-gray-400 mt-1   h-auto rounded-sm   duration-200  ease-linear z-50 ' : 'overflow-hidden w-0 h-0 '}`}>
                {
                    cart.length === 0 ? <p className='text-black font-semibold px-6 '>Cart is empty</p> :
                        <>
                            {
                                cart.map((prod) =>

                                    <div className='flex w-full text-black font-semibold p-2' key={prod.id}>
                                        <aside className='w-1/4 flex'>
                                            <img src={prod.image} alt="ERROR" className='w-10 h-10 object-cover rounded-full  m-auto cursor-pointer ' />


                                        </aside>
                                        <aside className='text-[14px] w-3/4 px-2'>
                                            <p>{prod.productName}</p>
                                            <p>${prod.price}</p>


                                        </aside>

                                        <aside className=' flex pr-1 cursor-pointer' onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod }) }}>
                                            {<AiFillDelete size={20} style={{ margin: 'auto' }}
                                                onMouseOver={({ target }) => target.style.color = "red"}
                                                onMouseOut={({ target }) => target.style.color = "black"}
                                            />}
                                        </aside>


                                    </div>)
                            }
                        </>
                }

                {cart.length !== 0 && <Link to='/cart' className='bg-blue-600 hover:bg-blue-700 duration-200 w-[90%] mx-auto flex text-center rounded-sm  py-[2px] mb-2 mt-1' onClick={() => { setToggle(!toggle) }}>
                    <span className='mx-auto '>Go to cart</span> </Link>}

            </section>
        </main >
    )
}

export default Dropdown