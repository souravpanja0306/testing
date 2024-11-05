import React, { useEffect, useState } from 'react'
import OptionBar from '../Components/OptionBar'
import Navbar from '../Components/Navbar';
import PlayButton from '../Components/PlayButton';

const About = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) setIsPopupOpen(true);
    }, []);

    return (
        <>
            <Navbar />
            <button onClick={() => localStorage.clear()} >Clear</button>
            <OptionBar isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    )
}

export default About