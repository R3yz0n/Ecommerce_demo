export const cartReducer = (state, action) => {

    //    state  { products: products, cart: [] }
    switch (action.type) {
        case 'fetch':
            return { ...state, products: action.payload }

        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(p => p.id !== action.payload.id) }





        default:
            return state;
    }
};