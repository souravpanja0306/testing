import React from 'react'

const Divider = () => {
    return (
        <div className='flex justify-center items-center'> 
            <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} className="w-[80%]" />
        </div>
    )
}

export default Divider