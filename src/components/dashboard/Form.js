import React, { useState } from 'react';
import FormInput from './FormInput';
import axios from 'axios';
import { storage } from '../../Firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Dropdown from './Dropdown';

const Form = () => {
    const [formValues, setFormValues] = useState({ productName: '', rating: '', deliveryTime: '', category: '', price: '', quantity: '' })
    const [img, setImg] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // const [info, setInfo] = useState([])
    const addProduct = async (e) => {
        e.preventDefault()
        setErrorMessage('')
        if (img === null || formValues.productName.length === 0 || formValues.deliveryTime.length === 0 ||
            formValues.price.length === 0 || formValues.category.length === 0 || formValues.quantity.length === 0) {
            setErrorMessage("Please fill all the fields.")
            console.log("please select image");
            return;
        }

        try {
            const imgRef = ref(storage, `images/${img.name}${Math.random().toString()}`)
            const imgInfo = await uploadBytes(imgRef, img);
            // console.log(imgInfo);
            const imgUrl = await getDownloadURL(imgRef);
            formValues.image = imgUrl
        }
        catch (err) {
            console.log(err.message);
            setErrorMessage(err.message)

        }



        try {
            const data = await axios.post('https://ecommerce-context-11a68-default-rtdb.asia-southeast1.firebasedatabase.app/products.json', formValues)
            // console.log(data);
        }
        catch (err) {
            console.log(err.message);
            setErrorMessage(err.message)
        }
        console.log(formValues);
        setFormValues({ productName: '', rating: '', deliveryTime: '', category: '', price: '', quantity: '' })
        // setImg(null)




    }

    const imgUploadHandler = (e) => {
        setImg(e.target.files[0])
        console.log(img);


    }

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        // console.log(formValues);

    }
    return (
        <section className='h-[700px] w-full '>


            <form className='m-auto flex flex-col max-w-[85%] sm:max-w-md text-white' onSubmit={addProduct}>

                <FormInput type='text' placeholder="Product Name" minLength={5} maxLength={40} name='productName'
                    onChange={changeHandler} value={formValues.productName} />

                <FormInput type='number' placeholder="Price in $" min={0} max={9999} name='price'
                    onChange={changeHandler} value={formValues.price} />

                <FormInput type='number' placeholder="Quantity" min={0} max={100} name='quantity'
                    onChange={changeHandler} value={formValues.quantity} />

                <FormInput type='number' placeholder="Rating" min={0} max={5} name='rating'
                    onChange={changeHandler} value={formValues.rating} />


                <FormInput type='number' placeholder='Delivery' min={1} max={7} name='deliveryTime'
                    onChange={changeHandler} value={formValues.deliveryTime} />

                <Dropdown onChange={changeHandler} value={formValues.category} name='category' />

                <FormInput type='file' name='image' onChange={imgUploadHandler} style={{ border: 'none' }} />

                {errorMessage && <p className='text-center text-red-600'>{errorMessage}</p>}

                <span className='flex overflow-hidden'>
                    <button className='shadow-2xl hover:text-yellow-300 hover:bg-cyan-700  border-black duration-200 px-10 tracking-widest bg-cyan-600 mt-10 py-2 mx-auto rounded-md text-lg' type='submit'>Submit</button>
                </span>

            </form>

        </section >
    )
}

export default Form