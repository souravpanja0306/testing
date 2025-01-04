import React, { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import PlayButton from '../Components/PlayButton';
import AudioContext from '../Components/AudioProvider';
import Layout from '../Components/Layout';
import middlewareService from '../Utils/Middleware';
import { IoArrowForwardOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Divider from '../Components/Divider';

const Welcome = () => {
    const [searchParams] = useSearchParams();
    // const code = searchParams.get('code');
    const from = searchParams.get('f');
    const withs = searchParams.get('w');
    const address = searchParams.get('a');
    const name = searchParams.get('n');

    const { togglePlay, isPlaying } = useContext(AudioContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        // let data = middlewareService.middleware({ code: code });
        // if (data.is_authenticated) localStorage.setItem("data", JSON.stringify(data.data));
        if (from && withs && address && name) {
            console.log(from, withs, address, name)
            let newObject = {
                code: "0000",
                address: address ? address : "",
                name: name ? name : "",
                with: "",
            };
            if (withs && withs == "0") newObject["with"] = "Self";
            if (withs && withs == "1") newObject["with"] = "With Family";
            localStorage.setItem("data", JSON.stringify(newObject));
            localStorage.setItem("from", from == "0" ? "rina" : "sourav");
        } else {
            let isDataExist = localStorage.getItem("data");
            if (!isDataExist) {
                let newObject = {
                    code: "0000",
                    address: address ? address : "",
                    name: name ? name : "",
                    with: "",
                };
                if (withs && withs == "0") newObject["with"] = "Self";
                if (withs && withs == "1") newObject["with"] = "With Family";
                localStorage.setItem("data", JSON.stringify(newObject));
                localStorage.setItem("from", "sourav");
            };
        };
        if (!isPlaying) setIsPopupOpen(true);
    }, []);

    return (
        <Layout>
            <Link to="/address" className="fixed bottom-[300px] left-0" onClick={() => navigator.vibrate(75)}>
                <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-r-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                    <IoLocationOutline />
                    <p className="text-xs">Venue</p>
                </div>
            </Link>
            <Link to="/home" className="fixed bottom-[300px] right-0" onClick={() => navigator.vibrate(75)}>
                <div className="font-playwrite p-2 mb-1 text-white shadow-md shadow-slate-500 rounded-l-full bg-black cursor-pointer select-none flex justify-center items-center gap-1 animate-blink">
                    <p className="text-xs">Greetings</p>
                    <IoArrowForwardOutline />
                </div>
            </Link>

            <div className='min-h-screen justify-center items-center flex flex-col rounded-br-3xl rounded-tl-3xl'>
                <img alt='Swastick' className='w-[10%] text-center' src={`${process.env.PUBLIC_URL}/swastick.png`} />
                <Divider />
                <p className='text-yellow-500 font-dancing text-4xl font-medium animate-text-from-left'>~ Welcome ~</p>
                <Divider />
                <PlayButton isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                <div className='w-full flex justify-center'>
                    <img alt='Ganesh' src={`${process.env.PUBLIC_URL}/ganesh.png`} className='w-[50%] text-center' />
                </div>
                <Divider />
                <p className='text-yellow-500 font-dancing text-2xl font-medium animate-text-from-right'>Om Shri Ganeshaya Namaha</p>
                <Divider />
            </div>
        </Layout>
    )
}

export default Welcome