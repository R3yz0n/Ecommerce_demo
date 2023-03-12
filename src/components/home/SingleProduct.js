import { CartState } from '../../store/Context';
import Rating from './Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const SingleProduct = ({ prod }) => {
    // console.log(prod);
    console.log('hi');
    const { state: { cart }, dispatch } = CartState();

    return (
        <main className=' text-black py-4 card1  shadow-lg border-[1px] border-[#dfdcdc] h-fit mb-3 sm:mb-5'>

            <section className='overflow-hidden w-full px-2'>

                <div className='flex max-w-[120px] h-[120px] sm:max-w-[150px] sm:h-[150px]  overflow-hidden px-2  mx-auto' id='over-ride'>

                    <LazyLoadImage src={prod.image} alt="ERROR" className='max-w-full min-h-[60%] sm:min-h-[60%] max-h-full   m-auto ' effect='blur' />

                </div>
                <aside className='px-3 flex flex-col gap-1'>

                    <p className='  w-full mt-2 '>{prod.productName}</p>
                    <p className='text-sm w-full '>${prod.price}.00</p>
                    <p className='text-sm  w-full '>{prod.deliveryTime > 3 ? `${prod.deliveryTime} days Delivery` : 'Fast Delivery'}</p>
                    <Rating rating={prod.rating} onClick={() => { }} />

                    <aside className=' w-full text-sm text-white'>
                        {
                            cart.some(p => p.id === prod.id) ?
                                <button className=' bg-red-500 px-2 w-max py-[2px] lg:px-3 rounded-sm ' onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod }) }}>Remove from Cart</button> :
                                <button className={`' bg-blue-500 px-5 rounded-sm py-[2px] w-max  ' ${prod.quantity <= 0 && 'bg-[#454343] text-white'} `} disabled={prod.quantity <= 0} onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod }) }}>
                                    {prod.quantity <= 0 ? "Out of Stock" : "Add to Cart"}
                                </button>
                        }
                    </aside>
                </aside>







            </section>

        </main>
    )
}

export default SingleProduct