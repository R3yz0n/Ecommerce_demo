import React from 'react'
import { CartState } from '../../store/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';

const Home = ({ nav }) => {

    const { state: { products, cart }, prodState: { sort, byStock, byFastDelivery, byRating, searchQuery, category } } = CartState();



    const transformProducts = () => {
        let sortedProducts = products
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) => (sort === 'lowToHigh') ? a.price - b.price : b.price - a.price)

        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter(prod => prod.productName.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        if (byRating) {
            sortedProducts = sortedProducts.filter(prod => prod.rating >= byRating)
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter(prod => prod.deliveryTime < 3)
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter(prod => prod.quantity > 0)
        }
        if (category)
            sortedProducts = sortedProducts.filter(prod => prod.category === category)

        return sortedProducts


    }
    return (
        <main className='w-full h-screen flex py-3  md:pl-2  relative'>
            <Filters nav={nav} />
            <section className='grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4  w-[100%]  mx-auto overflow-y-scroll  gap-y-5 gap-x-3 px-3  border-1 h-[90%]'>
                {transformProducts().map((prod) => <SingleProduct key={Math.random()} prod={prod} />)}
            </section>


        </main>
    )
}

export default Home