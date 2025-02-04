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
    const [from, setFrom] = useState("sourav");

    useEffect(() => {
        let datas = localStorage.getItem("data");
        if (data) setdata(JSON.parse(datas));

        let fromWhom = localStorage.getItem("from");
        if (fromWhom) setFrom(fromWhom);
    }, []);
    return (
        <>
            <Layout>
                <Link to="/venue" className="fixed bottom-[25%] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <IoCalendarNumberOutline />
                        <p className="text-xs">Programmes</p>
                    </div>
                </Link>
                <Link to="/address" className="fixed bottom-[25%] right-0" onClick={() => navigator.vibrate(75)}>
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
                            {from == "rina" ? "Sukumar Halder & Arati Halder" : "Bimal Panja & Jaya Panja"}
                        </p>
                    </div>
                    <div className='flex flex-col py-2 text-center'>
                        <Divider />
                        <p className='text-yellow-500 font-dancing text-4xl font-medium'>~ RSVP ~</p>
                        <Divider />
                        <p className='text-yellow-500 font-dancing text-3xl font-medium animate-text-from-right'>
                            {from == "rina" ? "Manaranjan Halder" : "Subham Panja"}
                        </p>
                        {/* <p className='text-yellow-500 font-dancing text-3xl font-medium animate-text-from-left'>
                            {from == "rina" ? "Manaranjan Halder" : "Sweety Panja"}
                        </p>
                        <p className='text-yellow-500 font-dancing text-3xl font-medium animate-text-from-right'>
                            {from == "rina" ? "Amit Halder & Sona Halder" : "Subham Panja & Dipika Panja"}
                        </p> */}
                        <br />
                        {/* <Divider /> */}
                        <p className='text-white font-dancing text-xl font-medium animate-text-from-right'>
                            Click to Call
                        </p>
                        <p className='text-yellow-500 font-playwrite text-xl font-medium animate-text-from-left'>
                            {from == "rina"
                                ? <div className=''>
                                    <a href="tel:+918013951866"
                                        className='flex justify-center items-center gap-2 m-2 p-0'>
                                        <IoCallOutline />
                                        +918013951866
                                    </a>
                                    <a href="tel:+919007773636"
                                        className='flex justify-center items-center gap-2 m-2 p-0'>
                                        <IoCallOutline />
                                        +919007773636
                                    </a>
                                    <a href="tel:+918240600845"
                                        className='flex justify-center items-center gap-2 m-2 p-0'>
                                        <IoCallOutline />
                                        +918240600845
                                    </a>
                                </div>
                                : <>
                                    <a href="tel:+917278288786"
                                        className='flex justify-center items-center gap-2 m-2 p-0'>
                                        <IoCallOutline />
                                        +917278288786
                                    </a>
                                    <a href="tel:+919883250237"
                                        className='flex justify-center items-center gap-2 m-2 p-0'>
                                        <IoCallOutline />
                                        +919883250237
                                    </a>
                                </>
                            }
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Invitation