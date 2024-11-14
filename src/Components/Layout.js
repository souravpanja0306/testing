import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="bg-cover bg-center min-h-screen relative" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)` }}>
        {/* < div className="bg-cover bg-center min-h-screen bg-[#141d31] p-2 relative" > */}
            {children}
        </div >
    )
}

export default Layout