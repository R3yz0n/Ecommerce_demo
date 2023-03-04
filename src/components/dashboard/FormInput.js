import React from 'react'

const FormInput = (props, { style }) => {
    return (
        <input{...props} className={"w-full bg-transparent border-b-2 pt-4 pb-1 focus:outline-none px-2 rounded text-lg tracking-widest"} />
    )
}

export default FormInput