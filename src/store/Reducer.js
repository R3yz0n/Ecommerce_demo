export const cartReducer = (state, action) => {

    //    state  { products: products, cart: [] }
    switch (action.type) {
        case 'fetch':
            return { ...state, products: action.payload }

        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }

        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(p => p.id !== action.payload.id) }

        case 'CHANGE_QTY':
            return { ...state, cart: state.cart.filter(p => (p.id === action.payload.id) ? (p.qty = action.payload.qty) : (p.qty)) }





        default:
            return state;
    }
};
// { byStock: false, byFastDelivery: false, byRating: 0, searchQuery: '' }
export const prodReducer = (state, action) => {
    switch (action.type) {
        case 'BY_PRICE':
            return { ...state, sort: action.payload }

        case 'BY_STOCK':
            return { ...state, byStock: !state.byStock }

        case 'BY_DELIVERY':
            return { ...state, byFastDelivery: !state.byFastDelivery }

        case 'BY_RATING':
            console.log(action.payload);
            return { ...state, byRating: action.payload }

        case 'SEARCH_QUERY':
            return { ...state, searchQuery: action.payload }

        case 'BY_CATEGORY':
            return { ...state, category: action.payload }

        case 'CLEAR_FILTERS':
            return { byStock: false, byFastDelivery: false, byRating: 0, searchQuery: '', category: '' }

        default: return state;
    }

}