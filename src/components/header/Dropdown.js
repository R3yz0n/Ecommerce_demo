import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BsTriangleFill } from 'react-icons/bs'

const Dropdown = ({ cart }) => {
    const [toggle, setToggle] = useState(false)

    const showCartHandler = (e) => setToggle(!toggle)





    return (
        <main className='overflow-hidden'>

            <button className='hover:bg-green-800 bg-green-700 flex px-3 py-2 rounded-md gap-1 items-center' onClick={showCartHandler}>
                <FaShoppingCart size={18} />
                <span className='font-semibold'>{cart.length}</span>
                <BsTriangleFill style={{ rotate: '180deg' }} size={11} />



            </button>

            <section className={`${toggle ? 'absolute bg-gray-500 min-w-[10rem] h-auto rounded-sm px-3 py-1 duration-200 mt-1 ease-linear' : 'overflow-hidden w-0 h-0 '}`}>
                {
                    cart.length === 0 ? <p>Cart is empty</p> :
                        <>


                            {
                                cart.map((prod) =>
                                    <div className=''>
                                        <img src={prod.image} alt="ERROR" className='w-7 h-7 rounded-full' />


                                    </div>)
                            }
                        </>
                }
            </section>
        </main>
    )
}

export default Dropdown