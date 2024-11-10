import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div className="bg-cover bg-center min-h-screen p-2 relative" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)` }}>
        {/* < div className="bg-cover bg-center min-h-screen bg-[#141d31] p-2 relative" > */}
            {children}
        </div >
    )
}

export default Layout