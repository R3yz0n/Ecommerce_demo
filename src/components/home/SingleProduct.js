import { CartState } from '../../store/Context';
import Rating from './Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Cart from '../cart/Cart';


const SingleProduct = ({ prod }) => {
    // console.log(prod);
    const { state: { cart }, dispatch } = CartState();

    return (
        <main className='border-1 text-black'>

            <section className='overflow-hidden w-full px-2'>

                <div className='flex max-w-[200px] h-[200px]  overflow-hidden px-2  mx-auto' id='over-ride'>

                    <LazyLoadImage src={prod.image} alt="ERROR" className='max-w-full min-h-[60%] max-h-full   m-auto ' effect='blur' />

                </div>
                <aside className='px-3'>

                    <p className='text-lg  w-full'>{prod.productName}</p>
                    <p className='text-lg  w-full'>${prod.price}</p>
                    <p className='text-lg text-center w-full'>{prod.deliveryTime > 3 ? `${prod.deliveryTime} days Delivery` : 'Fast Delivery'}</p>
                    <Rating rating={prod.rating} onClick={() => { }} />
                </aside>

                <div className='w-full mx-auto flex  justify-center mb-3'>

                    {
                        cart.some(p => p.id === prod.id) ?
                            <button className='border-2 bg-red-500 px-5 rounded-md' onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod }) }}>Remove from Cart</button> :
                            <button className={`'border-2 bg-blue-500 px-5 rounded-md ' ${prod.quantity <= 0 && 'bg-[#454343] text-white'}`} disabled={prod.quantity <= 0} onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod }) }}>
                                {prod.quantity <= 0 ? "Out of Stock" : "Add to Cart"}
                            </button>
                    }


                </div>

            </section>

        </main>
    )
}

export default SingleProduct