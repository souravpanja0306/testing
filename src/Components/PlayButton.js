import React, { useState, useContext } from 'react';
import AudioContext from './AudioProvider';
import { IoPlayOutline, IoCloseCircleOutline } from "react-icons/io5";

const PlayButton = ({ isOpen, onClose }) => {
    const { togglePlay, isPlaying } = useContext(AudioContext);
    const handelSubmit = (e) => {
        e.preventDefault();
        if (navigator.vibrate) navigator.vibrate(75);
        togglePlay();
        onClose();
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-75 ${isOpen ? '' : 'hidden'} user-select-none`}>
            <div
                className={`fixed bottom-0 left-0 right-0 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} 
                    transition-transform duration-300 ease-in-out text-white`}
                onClick={(e) => e.stopPropagation()}>
                <form className="flex flex-col justify-between gap-2 m-2 p-2 rounded-lg bg-[#141d31]">
                    <p className='text-yellow-500 font-playwrite'>#Play music for better experience..</p>
                    <button type='submit' className="text-white font-bold p-2 font-playwrite flex justify-center items-center gap-1" onClick={(e) => handelSubmit(e)}>
                        <IoPlayOutline className='text-2xl' />
                        Play
                    </button>
                </form>
                <div className="flex justify-center gap-2 m-2 p-2 rounded-lg bg-[#141d31]" onClick={() => onClose()}>
                    <button className="text-red-500 font-bold font-playwrite flex justify-center items-center gap-1">
                        <IoCloseCircleOutline className='text-2xl' />
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayButton