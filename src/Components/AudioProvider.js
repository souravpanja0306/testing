import React, { createContext, useRef, useEffect, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const audioRef = useRef(new Audio(`${process.env.PUBLIC_URL}/music.mp3`));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch((err) => console.log("Playback prevented", err));
        };
        return () => {
            audioRef.current.pause();
        };
    }, [isPlaying]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                audioRef.current.pause();
            } else if (isPlaying) {
                audioRef.current.play();
            };
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            audioRef.current.loop = true;
            audioRef.current.volume = 0.2;
        };
    };

    return (
        <AudioContext.Provider value={{ togglePlay, isPlaying }}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioContext;