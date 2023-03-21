import React, { useState, useEffect, useReducer, useContext, useMemo } from 'react'
import GetProducts from './GetProducts';
import { cartReducer, prodReducer } from './Reducer';

const Cart = React.createContext();

const Context = ({ children }) => {

    // product state is useless here remove it LATER

    const [products, setProducts] = useState([])


    const [state, dispatch] = useReducer(cartReducer, { products: products, cart: [] })
    // console.log(state.cart);

    const [prodState, prodDispatch] = useReducer(prodReducer, { byStock: false, byFastDelivery: false, byRating: 0, searchQuery: '', category: '' })


    useEffect(() => {
        GetProducts(setProducts, dispatch)

    }, [])




    return (
        // <Cart.Provider value={useMemo(() => ({ state, dispatch, prodState, prodDispatch }), [state, prodState, dispatch, prodDispatch])}>
        //     {children}
        // </Cart.Provider>
        <Cart.Provider value={{ state, dispatch, prodState, prodDispatch }}>
            {children}
        </Cart.Provider>


    )
}
export default Context;


export const CartState = () => useContext(Cart);