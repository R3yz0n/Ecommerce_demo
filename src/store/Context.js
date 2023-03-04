import React, { useState, useEffect, useReducer, useContext } from 'react'
import GetProducts from './GetProducts';
import { cartReducer } from './Reducer';

const Cart = React.createContext();

const Context = ({ children }) => {

    // product state is useless here remove it LATER

    const [products, setProducts] = useState([])
    const [state, dispatch] = useReducer(cartReducer, { products: products, cart: [] })
    // console.log(state.cart);


    useEffect(() => {
        GetProducts(setProducts, dispatch)

    }, [])




    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}
export default Context;


export const CartState = () => useContext(Cart);