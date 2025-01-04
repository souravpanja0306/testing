import React, { useEffect, useState, useContext } from 'react'
import { IoCallOutline, IoCalendarNumberOutline, IoLocationOutline } from "react-icons/io5";
import { PiHandsPrayingLight } from "react-icons/pi";
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { useNavigate } from 'react-router-dom';
import Divider from '../Components/Divider';

const Invitation = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState({});
    const [from, setFrom] = useState("");

    useEffect(() => {
        let datas = localStorage.getItem("data");
        let froms = localStorage.getItem("from");
        if (data) setdata(JSON.parse(datas));
        if (from) setFrom(froms);
    }, []);
    return (
        <>
            <Layout>
                <Link to="/venue" className="fixed bottom-[40%] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <IoCalendarNumberOutline />
                        <p className="text-xs">Programmes</p>
                    </div>
                </Link>
                <Link to="/address" className="fixed bottom-[40%] right-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <p className="text-xs">Venue</p>
                        <IoLocationOutline />
                    </div>
                </Link>

                <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                    <Divider />
                    <p className='text-yellow-500 font-dancing text-4xl font-medium'>~ Invitations ~</p>
                    <Divider />
                    <p className='text-yellow-500 font-dancing text-4xl font-medium animate-text-from-right'>{data?.name}</p>
                    <p className='text-yellow-500 font-playwrite text-lg font-medium animate-text-from-left'>{data?.address}</p>
                    <p className='text-yellow-500 font-dancing text-xl font-medium animate-text-from-right'>{data?.with}</p>
                    <PiHandsPrayingLight className='text-yellow-500 text-7xl font-thin p-2' />
                    <div className='flex flex-col py-2 text-center'>
                        <p className='text-yellow-500 font-dancing text-xl font-medium animate-text-from-left'>With best compliments from:</p>
                        <p className='text-yellow-500 font-playwrite text-xl font-medium animate-text-from-right'>
                            {
                                from == "rina" ? "Sukumar Hader & Arati Halder" : "Bimal Panja & Jaya Panja"
                            }
                        </p>
                    </div>
                    <div className='flex flex-col py-2 text-center'>
                        <Divider />
                        <p className='text-yellow-500 font-dancing text-4xl font-medium'>~ R.S.V.P. ~</p>
                        <Divider />
                        <p className='text-yellow-500 font-dancing text-3xl font-medium animate-text-from-right'>Subhradip Panja</p>
                        <p className='text-yellow-500 font-dancing text-3xl font-medium animate-text-from-left'>Sweety Panja</p>
                        <p className='text-yellow-500 font-dancing text-3xl font-medium animate-text-from-right'>Subham Panja & Dipika Panja</p>
                        <p className='text-yellow-500 font-playwrite text-xl font-medium animate-text-from-left'>7278288786 / 9883250237</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Invitation