import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SwipeToDelete from '../Components/SwipeToDelete';

const Home = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const handleDelete = (item) => {
        setItems((prevItems) => prevItems.filter((i) => i !== item));
    };
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <div className="space-y-2">
                {items.map((item) => (
                    <SwipeToDelete key={item} item={item} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}

export default Home