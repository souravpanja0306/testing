import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* <audio autoPlay loop>
                <source src={`${process.env.PUBLIC_URL}/Diwali_Padwa.mp3`} type="audio/mp3" />
            </audio> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar