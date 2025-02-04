import React from 'react'
import Layout from '../Components/Layout'
import { IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Divider from '../Components/Divider';

const Address = () => {
    return (

        <Layout>
            <Link to="/invitation" className="fixed bottom-[25%] left-0" onClick={() => navigator.vibrate(75)}>
                <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                    <IoPeopleOutline />
                    <p className="text-xs">Invitation</p>
                </div>
            </Link>
            <Link to="/" className="fixed bottom-[25%] right-0" onClick={() => navigator.vibrate(75)}>
                <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                    <p className="text-xs">Home</p>
                    <IoHomeOutline />
                </div>
            </Link>

            <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                <Divider />
                <p className='text-yellow-500 font-dancing text-4xl font-medium'>~ Venue ~</p>
                <Divider />
                <div className='w-full flex justify-center'>
                    <img alt='Address' src={`${process.env.PUBLIC_URL}/address.png`} className='w-[50%] text-center' />
                </div>
                <a href="https://maps.app.goo.gl/2PuUZbWtSZMap44h8" 
                className="p-2 text-yellow-500 font-playwrite text-sm font-medium text-center underline animate-text-from-left">
                    Click to Go!
                </a>
                <Divider />
                <p className='text-yellow-500 text-2xl font-playwrite animate-text-from-right'>RAILWAY INSTITUTE</p>
                <p className='text-yellow-500 font-dancing text-2xl font-medium animate-text-from-left'>BNR, Garden Reach, S.E. Railway</p>
                <p className='text-yellow-500 font-dancing text-2xl font-medium animate-text-from-right'>Kolkata - 700 043</p>
                <Divider />
            </div>
        </Layout>

    )
}

export default Address