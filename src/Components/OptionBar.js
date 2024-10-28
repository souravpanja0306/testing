import React, { useState } from 'react'

const OptionBar = ({ isOpen, onClose }) => {
    const [mobile, setMobile] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();
        if (mobile) {
            localStorage.setItem("token", mobile);
            onClose()
        };
    };

    return (
        <div className={`fixed bottom-0 left-0 right-0 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out bg-gray-800 text-white p-4 rounded-t-2xl`}>
            {/* <div className="flex justify-between items-center"> */}
            <form onSubmit={(e) => handelSubmit(e)} className='flex justify-between gap-2'>
                <input
                    className='p-2 outline-none rounded-2xl text-slate-800 w-[80%]'
                    placeholder='Please enter mobile'
                    maxLength={10}
                    onChange={(e) => setMobile(e.target.value)} />
                <button
                    className='text-white font-bold bg-slate-700 p-2 rounded-2xl'
                    onClick={(e) => handelSubmit(e)}
                >Submit</button>
                <button
                    className="text-red-500 font-bold"
                    onClick={() => onClose()}
                >Close</button>
            </form>
            {/* </div> */}
        </div>
    )
}

export default OptionBar