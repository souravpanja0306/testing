import React, { useEffect, useState } from 'react'
import OptionBar from '../Components/OptionBar'
import Layout from '../Components/Layout';
import { Link, useSearchParams } from 'react-router-dom';
import {
    IoArrowBackOutline,
    IoPeopleOutline
} from "react-icons/io5";

const Venue = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) setIsPopupOpen(true);
    }, []);

    return (
        <>
            {/* <button onClick={() => localStorage.clear()} >Clear</button>
                <OptionBar isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
            <Layout>
                <Link to="/home" className="absolute bottom-[50%] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <IoArrowBackOutline />
                        <p className="text-xs">Greetings</p>
                    </div>
                </Link>
                <Link to="/invitation" className="absolute bottom-[50%] right-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <p className="text-xs">Invitation</p>
                        <IoPeopleOutline />
                    </div>
                </Link>

                <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                    <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} className="w-[80%]" />
                    <p className='text-yellow-500 font-dancing text-5xl font-medium'>~ Programs ~</p>
                    <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} className="w-[80%]" />
                </div>
            </Layout>
        </>
    )
}

export default Venue