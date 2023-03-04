import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, onClick }) => {
    return (
        <span className='flex gap-[2px]'>

            {
                [...Array(5)].map((_, i) => (
                    <span className='self-center mt-1 cursor-pointer' key={i} onClick={() => onClick(i + 1)}>{rating > i ? (<AiFillStar size={15} />) : (<AiOutlineStar size={15} />)}</span>
                ))
            }


        </span>

    )
}

export default Rating