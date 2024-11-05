import React, { useState } from 'react'

const OptionBar = ({ isOpen, onClose }) => {
    const [mobile, setMobile] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();
        if (mobile) {
            localStorage.setItem("token", mobile);
            onClose();
        };
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'} user-select-none`}>
            <div
                className={`fixed bottom-0 left-0 right-0 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} 
                    transition-transform duration-300 ease-in-out text-white`}
                onClick={(e) => e.stopPropagation()}>
                <form
                    onSubmit={(e) => handelSubmit(e)}
                    className="flex flex-col justify-between gap-2 m-2 p-2 rounded-lg bg-white">
                    <input
                        className="p-2 outline-none text-slate-800 border-2 border-solid border-slate-200 rounded-lg"
                        placeholder="Please enter mobile"
                        maxLength={10}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                        type='tel' />
                    <button type='submit' className="text-slate-700 font-bold p-2">Submit</button>
                </form>
                <form className="flex justify-center gap-2 m-2 p-2 rounded-lg bg-white" onClick={() => onClose()}>
                    <button className="text-red-500 font-bold">Close</button>
                </form>
            </div>
        </div>
    )
}

export default OptionBar