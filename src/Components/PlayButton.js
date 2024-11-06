import React, { useState, useContext } from 'react';
import AudioContext from './AudioProvider';

const PlayButton = ({ isOpen, onClose }) => {
    const { togglePlay, isPlaying } = useContext(AudioContext);

    const handelSubmit = (e) => {
        e.preventDefault();
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
                    <button type='submit' className="text-white font-bold p-2 font-playwrite" onClick={(e) => handelSubmit(e)}>Play</button>
                </form>
                <form className="flex justify-center gap-2 m-2 p-2 rounded-lg bg-[#141d31]" onClick={() => onClose()}>
                    <button className="text-red-500 font-bold font-playwrite">Close</button>
                </form>
            </div>
        </div>
    )
}

export default PlayButton