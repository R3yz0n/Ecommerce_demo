import React from 'react'
import { CartState } from '../../store/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';

const Home = () => {

    const { state: { products } } = CartState();
    return (
        <main className='w-full min-h-screen flex p-2 '>
            <Filters />
            <section className='grid grid-cols-3 md:grid-cols-4  w-[100%] justify-evenly mx-auto'>
                {products.map((prod) => <SingleProduct key={Math.random()} prod={prod} />)}
            </section>


        </main>
    )
}

export default Home