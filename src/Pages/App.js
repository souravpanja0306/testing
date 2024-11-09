import React, { useEffect, useState, useContext } from 'react'
import {
    IoArrowForwardOutline,
    IoHomeOutline,
    IoArrowBackOutline,
    IoExitOutline,
    IoLocationOutline,
    IoCalendarNumberOutline,
    IoPeopleOutline
} from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { useNavigate } from 'react-router-dom';
import middlewareService from '../Utils/Middleware';
import PlayButton from '../Components/PlayButton';
import AudioContext from '../Components/AudioProvider';


const App = () => {
    const { togglePlay, isPlaying } = useContext(AudioContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    useEffect(() => {
        if (!isPlaying) setIsPopupOpen(true);
    }, []);
    const navigate = useNavigate();
    const targetDate = new Date('March 6, 2025 00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const [searchParams] = useSearchParams();

    const authentication = async () => {
        const token = searchParams.get('token');
        if (token) {
            const result = await middlewareService.middleware({ mobile: token });
            if (result.is_authenticated) {
                localStorage.setItem("token", token);
                localStorage.setItem("data", JSON.stringify(result.data));
                navigate("/");
            };
        };
    };

    useEffect(() => {
        authentication();
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(intervalId);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <>
            <PlayButton isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            <Layout>
                <Link to="/" className="absolute bottom-[50%] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-slate-900 cursor-pointer select-none flex justify-center items-center gap-1">
                        <IoHomeOutline />
                        <p className="text-xs">Home</p>
                    </div>
                </Link>
                <Link to="/venue" className="absolute bottom-[50%] right-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-slate-900 cursor-pointer select-none flex justify-center items-center gap-1">
                        <p className="text-xs">Programs</p>
                        <IoCalendarNumberOutline />
                    </div>
                </Link>

                <div className='flex flex-col justify-center items-center text-center gap-3 min-h-screen p-3'>
                    <img alt='Swastick' className='w-[10%] text-center' src={`${process.env.PUBLIC_URL}/swastick.png`} />
                    <p className="text-yellow-500 font-dancing text-4xl font-medium">~ Wedding Invitation ~</p>
                    <p className="text-white font-playwrite text-md font-medium">Together with our families we joufully invite you to the wedding of</p>
                    <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} />
                    <p className="font-dancing text-4xl text-yellow-500 font-bold">Sourav Panja</p>
                    <p className="font-dancing text-xl text-yellow-500">weds</p>
                    <p className="font-dancing text-4xl text-yellow-500 font-bold">Rina Halder</p>
                    <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} />
                    {/* <p className="font-dancing text-xl text-yellow-500 font-bold">::VENUE::</p>
                    <p className="text-white font-playwrite text-sm font-medium">Sunday, 8th March, 2025</p>
                    <p className="text-white font-playwrite text-sm font-medium">Railway Institute, Garden Reach, Kolkata - 700043</p> */}
                    <div className='w-full flex justify-center'>
                        <img alt='Couple' src={`${process.env.PUBLIC_URL}/couple.webp`} className='w-[50%] text-center' />
                    </div>
                    <div>
                        <p className="text-yellow-500 font-playwrite text-sm font-bold">Sunday, 6th March, 2025</p>
                        <p className="text-yellow-500 font-playwrite text-sm font-bold">We are waiting</p>
                        <p className="text-yellow-500 font-playwrite text-sm font-bold">
                            {timeLeft.days}Days, {timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s left.
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default App