import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { CgBoy } from "react-icons/cg";
import Divider from '../Components/Divider';

const Venue = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) setIsPopupOpen(true);
    }, []);

    return (
        <>
            <Layout>
                <Link to="/" className="absolute bottom-[50%] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <IoHomeOutline />
                        <p className="text-xs">Home</p>
                    </div>
                </Link>
                <Link to="/groom" className="absolute bottom-[50%] right-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <p className="text-xs">Groom</p>
                        <CgBoy />
                    </div>
                </Link>

                <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                    <div className='w-full flex justify-center'>
                        <img alt='Address' src={`${process.env.PUBLIC_URL}/bride.png`} className='w-[40%] text-center' />
                    </div>
                    <Divider />
                    <p className='text-yellow-500 font-dancing text-5xl font-medium'>~ Rina Halder ~</p>
                    <p className='text-yellow-500 font-playwrite text-xs font-medium'>Doughter of</p>
                    <p className='text-yellow-500 font-dancing text-xl font-medium'>Mr. Sukumar Halder</p>
                    <p className='text-yellow-500 font-playwrite text-lg font-medium'>&</p>
                    <p className='text-yellow-500 font-dancing text-xl font-medium'>Mrs. Arati Halder</p>
                    <Divider />
                </div>
            </Layout>
        </>
    )
}

export default Venue