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
        <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'} user-select-none`}>
            <div
                className={`fixed bottom-0 left-0 right-0 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} 
                    transition-transform duration-300 ease-in-out text-white`}
                onClick={(e) => e.stopPropagation()}>
                <form className="flex flex-col justify-between gap-2 m-2 p-2 rounded-lg bg-white">
                    <p className='text-slate-700'>#Please play music for better experience</p>
                    <button type='submit' className="text-slate-700 font-bold p-2" onClick={(e) => handelSubmit(e)}>Play</button>
                </form>
                <form className="flex justify-center gap-2 m-2 p-2 rounded-lg bg-white" onClick={() => onClose()}>
                    <button className="text-red-500 font-bold">Close</button>
                </form>
            </div>
        </div>
    )
}

export default PlayButton