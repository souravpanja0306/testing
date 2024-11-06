// import React, { useState, useContext, useEffect } from 'react'
// import Navbar from '../Components/Navbar'
// import AudioContext from '../Components/AudioProvider';
// import PlayButton from '../Components/PlayButton';

// const Home = () => {
//     const { togglePlay, isPlaying } = useContext(AudioContext);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);


//     useEffect(() => {
//         if (!isPlaying) setIsPopupOpen(true);
//     }, []);
//     return (
//         <div>
//             <PlayButton isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
//             <Navbar />
//         </div>
//     )
// }

// export default Home


import React, { useEffect, useState, useContext } from 'react'
import { IoArrowForwardOutline, IoHomeOutline, IoArrowBackOutline, IoLocationOutline, IoExitOutline } from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { useNavigate } from 'react-router-dom';
import AudioContext from '../Components/AudioProvider';
import PlayButton from '../Components/PlayButton';

const Home = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState({});
    const { togglePlay, isPlaying } = useContext(AudioContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    useEffect(() => {
        if (!isPlaying) setIsPopupOpen(true);
    }, []);

    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     let data = localStorage.getItem("data");
    //     if (data) setdata(JSON.parse(data));

    //     if (!data) navigate("/auth");
    //     if (!token) navigate("/auth");
    // }, []);

    const clearToken = () => {
        localStorage.clear();
        navigate("/auth");
    };
    return (
        <>
            <PlayButton isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            <div className='absolute bottom-0'>
                <Link to="/">
                    <div className='font-playwrite p-2 mb-1 text-white shadow-md
         shadow-slate-500 rounded-r-full bg-slate-900 cursor-pointer select-none flex justify-center items-center'>
                        <IoArrowBackOutline />
                        <p className='text-xs'>Prev</p>
                    </div>
                </Link>
                <Link to="/home">
                    <div className='font-playwrite p-2 mb-1 text-white shadow-md
         shadow-slate-500 rounded-r-full bg-slate-900 cursor-pointer select-none flex justify-center items-center'>
                        <p className='text-xs'>Next</p>
                        <IoArrowForwardOutline />
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
                    <p className="text-yellow-500 font-dancing text-4xl font-medium text-center">:: Invitation ::</p>
                    <img alt='Divider' src='/divider2.webp' />
                    <p className="text-white font-playwrite text-lg font-medium text-center">{data.name}</p>
                    <p className="text-white font-playwrite text-lg font-medium text-center">{data.address}</p>
                    <p className="text-white font-playwrite text-lg font-medium text-center">{data.with}</p>
                </div>
            </Layout>
        </>
    )
}

export default Home