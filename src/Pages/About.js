import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OptionBar from '../Components/OptionBar'

const About = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) setIsPopupOpen(true);
    }, []);

    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <OptionBar isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    )
}

export default About