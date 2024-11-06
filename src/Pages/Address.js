import React, { useState, useEffect } from 'react'
import Layout from './Components/Layout'
import { IoArrowForwardOutline, IoHomeOutline, IoArrowBackOutline, IoExitOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link, useSearchParams } from 'react-router-dom';

const Address = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) navigate("/auth");
        console.log("hello")
    }, 1000);

    const clearToken = () => {
        localStorage.clear();
        navigate("/auth");
    };

    
    return (
        <>
            <div className='absolute bottom-0'>
                <Link to="/">
                    <div className='font-playwrite p-2 mb-1 text-white shadow-md
                    shadow-slate-500 rounded-r-full bg-slate-900 cursor-pointer select-none flex justify-center items-center'>
                        <p className='text-xs'>Home</p>
                        <IoHomeOutline />
                    </div>
                </Link>
                <div className='font-playwrite p-2 mb-1 text-white shadow-md gap-2
                    shadow-slate-500 rounded-r-full bg-slate-900 cursor-pointer select-none flex justify-center items-center'
                    onClick={(e) => clearToken(e)}>
                    <p className='text-xs'>Exit</p>
                    <IoExitOutline />
                </div>
            </div>


            <Layout>
                <div className='w-full flex flex-col justify-center min-h-screen items-center'>
                    <p className="text-yellow-500 font-dancing text-4xl font-medium text-center">:: Address ::</p>
                    <img alt='Divider' src='/divider2.webp' />
                    <p className="text-white font-playwrite text-lg font-medium text-center">Railway Institute, Garden Reach Colony, Kolkata - 700043</p>
                    <img alt='Couple' src='/address.png' className='w-[70%] text-center' />
                    <p className="text-white font-playwrite text-sm font-medium text-center">Scan to Reach Here!</p>
                    <p className="text-white font-playwrite text-sm font-medium text-center">or</p>
                    <a href="https://maps.app.goo.gl/2PuUZbWtSZMap44h8" className="text-white font-playwrite text-sm font-medium text-center underline">
                        Click to Go!
                    </a>
                </div>
            </Layout>
        </>
    )
}

export default Address