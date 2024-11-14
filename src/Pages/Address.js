import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import {
    IoHomeOutline,
    IoCallOutline,
} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link, useSearchParams } from 'react-router-dom';
import Divider from '../Components/Divider';

const Address = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     if (!token) navigate("/auth");
    //     console.log("hello")
    // }, 1000);

    // const clearToken = () => {
    //     localStorage.clear();
    //     navigate("/auth");
    // };



    return (
        <>
            <Layout>
                <Link to="/rsvp" className="absolute bottom-[50%] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <IoCallOutline />
                        <p className="text-xs">Rsvp</p>
                    </div>
                </Link>
                <Link to="/" className="absolute bottom-[50%] right-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <p className="text-xs">Home</p>
                        <IoHomeOutline />
                    </div>
                </Link>

                <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                    <Divider />
                    <p className='text-yellow-500 font-dancing text-5xl font-medium'>~ Address ~</p>
                    <Divider />
                    <div className='w-full flex justify-center'>
                        <img alt='Address' src={`${process.env.PUBLIC_URL}/address.png`} className='w-[50%] text-center' />
                    </div>
                    <a href="https://maps.app.goo.gl/2PuUZbWtSZMap44h8" className="text-yellow-500 font-playwrite text-sm font-medium text-center underline">
                        Click to Go!
                    </a>
                    <Divider />
                    <p className='text-yellow-500 font-dancing text-2xl font-medium'>Railway Institute</p>
                    <p className='text-yellow-500 font-dancing text-2xl font-medium'>Garden React Calcutta</p>
                    <p className='text-yellow-500 font-dancing text-2xl font-medium'>Kolkata - 700043</p>
                    <Divider />
                </div>
            </Layout>
        </>
    )
}

export default Address