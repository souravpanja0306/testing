import React, { useEffect, useState, useContext } from 'react'
import PlayButton from '../Components/PlayButton';
import AudioContext from '../Components/AudioProvider';
import Layout from '../Components/Layout';
import { IoArrowForwardOutline, IoHomeOutline, IoArrowBackOutline, IoExitOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Welcome = () => {
    const { togglePlay, isPlaying } = useContext(AudioContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        if (!isPlaying) setIsPopupOpen(true);
    }, []);

    return (
        <Layout>
            <Link to="/address" className="absolute bottom-[50%] left-0" onClick={() => navigator.vibrate(75)}>
                <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full animate-blink bg-slate-900 cursor-pointer select-none flex justify-center items-center">
                    <IoLocationOutline />
                    <p className="text-xs">Address</p>
                </div>
            </Link>
            <Link to="/home" className="absolute bottom-[50%] right-0" onClick={() => navigator.vibrate(75)}>
                <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full animate-blink bg-slate-900 cursor-pointer select-none flex justify-center items-center">
                    <p className="text-xs">Greetings</p>
                    <IoArrowForwardOutline />
                </div>
            </Link>


            <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} />
                {/* <p className='text-yellow-500 font-dancing text-2xl font-medium'> Om Shri Ganeshaya Namaha</p> */}
                <p className='text-yellow-500 font-dancing text-5xl font-medium'>~ Welcome ~</p>
                <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} />
                <PlayButton isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                <div className='w-full flex justify-center'>
                    <img alt='Ganesh' src={`${process.env.PUBLIC_URL}/ganesh.webp`} className='w-[50%] text-center' />
                </div>
                <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} />
                <p className='text-yellow-500 font-dancing text-2xl font-medium'> Om Shri Ganeshaya Namaha</p>

                <img alt='Divider' src={`${process.env.PUBLIC_URL}/divider2.webp`} />
            </div>
        </Layout>
    )
}

export default Welcome