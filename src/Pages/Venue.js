import React, { useEffect, useState } from 'react';
import OptionBar from '../Components/OptionBar';
import Layout from '../Components/Layout';
import { Link, useSearchParams } from 'react-router-dom';
import { IoArrowBackOutline, IoPeopleOutline, IoCalendarNumberOutline } from "react-icons/io5";
import Divider from '../Components/Divider';
import dayjs from 'dayjs'

const Venue = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) setIsPopupOpen(true);
    }, []);

    const currentMonth = dayjs('2025-03');
    const startOfMonth = currentMonth.startOf('month').day();
    const daysInMonth = currentMonth.daysInMonth();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const generateDays = () => {
        const daysArray = [];
        for (let i = 0; i < startOfMonth; i++) {
            daysArray.push(null);
        };
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        };
        return daysArray;
    };
    const daysArray = generateDays();

    return (
        <>
            {/* <button onClick={() => localStorage.clear()} >Clear</button>
                <OptionBar isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
            <Layout>
                <Link to="/home" className="fixed bottom-[350px] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <IoArrowBackOutline />
                        <p className="text-xs">Greetings</p>
                    </div>
                </Link>
                <Link to="/invitation" className="fixed bottom-[350px] right-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <p className="text-xs">Invitation</p>
                        <IoPeopleOutline />
                    </div>
                </Link>

                <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                    <Divider />
                    <p className='text-yellow-500 font-dancing text-4xl font-medium'>~ Programs ~</p>
                    <Divider />
                    <h className="flex text-yellow-500 justify-center text-xl items-center gap-2 font-dancing animate-text-from-left">Save the Dates</h>

                    <div className="text-yellow-500 p-4 max-w-md mx-auto animate-text-from-right">
                        <h className="flex text-yellow-500 justify-center text-xl items-center gap-2 font-playwrite">Subh Bibah</h>
                        <div className="gap-2 font-dancing flex text-yellow-500 justify-center items-center text-center text-lg font-semibold">
                            <IoCalendarNumberOutline className='text-yellow-500' />
                            6th March, 2025
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-yellow-500 font-medium font-dancing">
                            {daysOfWeek.map((day, index) => (
                                <div key={index}>{day}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 mt-1 font-dancing">
                            {daysArray.map((day, index) => (
                                <div
                                    key={index}
                                    className={`h-6 flex items-center justify-center rounded cursor-pointer ${day
                                        ? 6 === day
                                            ? 'bg-red-500 text-white rounded-full'
                                            : 'bg-yellow-500 text-black'
                                        : ''
                                        }`}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Divider />

                    <div className="text-yellow-500 p-4 max-w-md mx-auto animate-text-from-left">
                        <h className="flex text-yellow-500 justify-center text-xl items-center gap-2 font-playwrite">Reception</h>

                        <div className="gap-2 font-dancing flex text-yellow-500 justify-center items-center text-center text-lg font-semibold">
                            <IoCalendarNumberOutline className='text-yellow-500' />
                            8th March, 2025
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-yellow-500 font-medium font-dancing">
                            {daysOfWeek.map((day, index) => (
                                <div key={index}>{day}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 mt-1 font-dancing">
                            {daysArray.map((day, index) => (
                                <div
                                    key={index}
                                    // onClick={() => handleDateClick(day)}
                                    className={`h-6 flex items-center justify-center rounded cursor-pointer ${day
                                        ? 8 === day
                                            ? 'bg-red-500 text-white rounded-full'
                                            : 'bg-yellow-500 text-black'
                                        : ''
                                        }`}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Venue