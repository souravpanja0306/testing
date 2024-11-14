import React, { useEffect, useState, useContext } from 'react'
import {
    IoCallOutline,
    IoCalendarNumberOutline
} from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { useNavigate } from 'react-router-dom';
import AudioContext from '../Components/AudioProvider';
import PlayButton from '../Components/PlayButton';
import OptionBar from '../Components/OptionBar'
import Divider from '../Components/Divider';

const Invitation = () => {

    const navigate = useNavigate();
    const [data, setdata] = useState({});
    const { togglePlay, isPlaying } = useContext(AudioContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    useEffect(() => {
        if (!isPlaying) setIsPopupOpen(true);
    }, []);

    const clearToken = () => {
        localStorage.clear();
        navigate("/auth");
    };
    return (
        <>
            <OptionBar isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            <Layout>
                <Link to="/venue" className="absolute bottom-[50%] left-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <IoCalendarNumberOutline />
                        <p className="text-xs">Programs</p>
                    </div>
                </Link>
                <Link to="/rsvp" className="absolute bottom-[50%] right-0" onClick={() => navigator.vibrate(75)}>
                    <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                        <p className="text-xs">RSVP</p>
                        <IoCallOutline />
                    </div>
                </Link>

                <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                    <Divider />
                    <p className='text-yellow-500 font-dancing text-5xl font-medium'>~ Invitations ~</p>
                    <Divider />
                </div>
            </Layout>
        </>
    )
}

export default Invitation