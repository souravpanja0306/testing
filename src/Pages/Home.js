import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import AudioContext from '../Components/AudioProvider';
import PlayButton from '../Components/PlayButton';

const Home = () => {
    const { togglePlay, isPlaying } = useContext(AudioContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    useEffect(() => {
        if (!isPlaying) setIsPopupOpen(true);
    }, []);
    return (
        <div>
            <PlayButton isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            <Navbar />
        </div>
    )
}

export default Home