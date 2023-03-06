import React, { useState, useEffect } from 'react'
import { CartState } from '../../store/Context'
import Rating from '../home/Rating';
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
    const { state: { cart }, dispatch } = CartState();
    const [total, setTotal] = useState(0)
    // console.log(cart);

    useEffect(() => {
        const temp = cart.reduce((acc = 0, curr) => acc + Number(curr.price) * curr.qty, 0)
        setTotal(temp)



    }, [cart])


    return (
        <main name='cart-page' className='flex max-h-screen  w-full '>

            <section name='left' className='w-3/4 px-6 py-4 flex flex-col gap-4  overflow-y-auto h-[90vh] '>
                {cart.map((prod) =>
                    <div className='flex w-full justify-between  items-center  card px-5 py-3 ' key={prod.id}>

                        <aside className='w-[8rem] h-[6rem] flex '>
                            <img src={prod.image} alt="ERROR" className=' max-w-full max-h-full m-auto min-h-[60%]' />
                        </aside>

                        <p className='px-3 w-[12rem]  font-medium'>{prod.productName}</p>
                        <p className='px-3 w-20 font-semibold'>${prod.price}.00</p>

                        <p className='px-3 '><Rating rating={prod.rating} onClick={() => { }} /> </p>

                        {/* <input type="number" className='px-3 bg-transparent border-1 w-20 rounded' minLength={1} min={0} max={10} maxLength={4}
                            value={prod.qty}
                            onChange={(e) => {
                                let n = e.target.value
                                n = +n
                                if (isNaN(n) || n === 0 || n > 10)
                                    return;

                                dispatch({ type: 'CHANGE_QTY', payload: { id: prod.id, qty: e.target.value } })
                            }}
                        /> */}
                        <p className='w-20 px-3 flex justify-between border-1'>

                            <button className='text-2xl font-bold'>+</button>
                            <span>{0}</span>
                            <button>-</button>
                        </p>


                        <p className='px-3' onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod }) }}>
                            {<AiFillDelete size={20} style={{ margin: 'auto' }}
                                onMouseOver={({ target }) => target.style.color = "red"}
                                onMouseOut={({ target }) => target.style.color = "black"}
                            />}</p>

                    </div>

                )}

            </section>

            <section className='w-1/4 lg:w-[25%] py-3 pr-3' name='right-summary'>
                <aside className='bg-gray-700 w-full h-full text-white py-4'>

                    <p className='text-white text-2xl px-5 py-2 font-semibold'> Subtotal ({cart.length}) items</p>

                    <p className='px-6 text-lg font-semibold mt-4'>Total : ${total}.000</p>

                    <button className='w-full mt-4 flex'><span className='w-[80%] bg-cyan-600 mx-auto py-1 rounded hover:bg-cyan-700 duration-200'>Proceed to Checkout</span></button>

                </aside>
            </section>


        </main>
    )
}

export default Cart