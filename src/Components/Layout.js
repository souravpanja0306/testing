import React from 'react'

const Layout = ({ children }) => {
    const helloWorld = () => {
        console.log("hello")
    }
    return (
        <div className="bg-cover min-h-screen relative" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background3.gif)` }}>
            < div className="bg-cover bg-center min-h-screen p-2" >
                {children}
            </div >
        </div >
    )
}

export default Layout