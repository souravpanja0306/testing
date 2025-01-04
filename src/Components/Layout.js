import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="bg-cover min-h-screen relative overflow-hidden select-none" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background3.gif)` }}>
        {/* <div className="bg-cover min-h-screen relative bg-slate-900 overflow-hidden"> */}
            <img src={`${process.env.PUBLIC_URL}/gg.png`} className='absolute left-[-50%] top-0 animate-infinity-round z-0 opacity-10' />
            <img src={`${process.env.PUBLIC_URL}/gg.png`} className='absolute right-[-50%] bottom-0 animate-infinity-round z-0 opacity-10' />
            < div className="bg-cover bg-center min-h-screen z-10 relative" >
                {children}
            </div >
        </div >
    )
}

export default Layout