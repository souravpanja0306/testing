import React from 'react'

const Layout = ({ children }) => {
    return (
        // <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background1.webp)` }}>
        < div className="bg-cover bg-center min-h-screen bg-[#141d31]" >
            {children}
        </div >
    )
}

export default Layout