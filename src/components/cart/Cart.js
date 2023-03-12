import React, { useState, useEffect } from 'react'
import { CartState } from '../../store/Context'
import Rating from '../home/Rating';
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { state: { cart }, dispatch } = CartState();
    const [total, setTotal] = useState(0)
    console.log('cart');


    useEffect(() => {
        const temp = cart.reduce((acc = 0, curr) => acc + Number(curr.price) * curr.qty, 0)
        setTotal(temp)

    }, [cart])


    return (
        <main name='cart-page' className='flex max-h-screen  w-full  overflow-hidden bg-[rgb(229,229,229)]'>

            <section name='left' className='w-[60%] sm:w-3/4 sm:px-3 md:px-4 lg:px-6 py-4 flex flex-col gap-4  overflow-y-auto h-[90vh] '>
                {cart.map((prod) =>
                    <div className='flex   w-full   items-center  px-1  gap-3 py-2 sm:py-2 text-[12px] sm:text-[14px]  md:text-[15px] bg-white card lg:py-2' key={prod.id}>


                        <aside className='w-[40%] sm:w-1/4 h-[5rem] lg:h-[6rem] flex'><img src={prod.image} alt="ERROR" className='max-w-full md:max-w-[80%] max-h-full m-auto min-h-[40%] min-w-[30%]' /></aside>


                        <aside className='h-full  w-[60%] sm:w-[73%] grid  sm:flex items-center  gap-1 justify-around'>
                            <p className='px-3   font-medium pb-1 text-[13px] sm:text-[15px] md:w-[34%] lg:text-[17px]'>{prod.productName}</p>

                            <p className='px-3 w-20 font-semibold'>${prod.price * prod.qty}.00</p>



                            <p className='w-24 px-3 font-medium' title='Quantity'>

                                <span className='pr-2'>Qty</span>

                                <select value={prod.qty} className='border-1 rounded' onChange={(e) => { dispatch({ type: 'CHANGE_QTY', payload: { id: prod.id, qty: e.target.value } }) }}>

                                    {[...Array(5)].map((_, i) => (<option key={i}>{i + 1}</option>))}

                                </select>

                            </p>

                            <p className='px-3 hidden md:flex'><Rating rating={prod.rating} onClick={() => { }} /></p>



                            <p className='px-3 py-1' onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod }) }}>
                                {<AiFillDelete className='text-[17px] sm:text-lg lg:text-xl'
                                    onMouseOver={({ target }) => target.style.color = "red"}
                                    onMouseOut={({ target }) => target.style.color = "black"}
                                />}</p>
                        </aside>

                    </div>

                )}

            </section>

            <section className='w-[40%] sm:w-[25%] lg:w-[25%] py-3 md:pr-3 relative' name='right-summary'>
                <aside className='bg-gray-700 w-full h-full text-white py-4'>

                    <p className=' sm:text-lg md:text-xl lg:text-3xl w-full flex py-2 font-semibold '> <span className='mx-auto inline border-b-2 pb-1 px-1 rounded-md'>Order Summary</span> </p>
                    <p className='text-white text-[13px] sm:text-[16px] md:text-lg  mx-[10%]  lg:text-xl  font-semibold mt-2 py-1 opacity-90'> Subtotal ({cart.length}) items</p>

                    <input type="text" placeholder='Enter Voucher Code' className='mx-[10%] w-[80%] text-[12px] px-[5%] rounded-sm mt-2 py-1 md:text-base text-black' />
                    <button className='mx-[10%] bg-orange-600 px-4 rounded-sm text-[13px] mt-3 py-[2px] sm:w-2/3 sm:py-[3px] sm:text-base' >Apply</button>

                    <p className=' mx-[10%] text-[13px]  md:text-base lg:text-lg font-semibold py-1 opacity-90 mt-1'>Total : ${total}.000</p>

                    <button className='w-full mt-4 flex text-[12px] md:text-base'><span className='w-[90%] bg-cyan-600 mx-auto py-1 rounded hover:bg-cyan-700 duration-200'>Proceed to Checkout</span></button>

                    <Link to='/' className='text-sm sm:text-base bg-white text-black absolute bottom-[30%] right-[7px] px-2 rounded-sm md:right-5 hover:bg-gray-300'> Shop now !</Link>

                </aside>
            </section>


        </main>
    )
}

export default Cart