import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

const SwipeToDelete = ({ item, onDelete }) => {
    const [isSwiped, setIsSwiped] = useState(false);

    const handleSwipeStart = () => {
        setIsSwiped(true);
    };

    const handleSwipeEnd = () => {
        setIsSwiped(false);
    };

    return (
        <div className="relative w-full">
            <div
                className={`absolute inset-y-0 right-0 flex items-center bg-red-500 text-white px-2 ${isSwiped ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300`}
                onClick={() => onDelete(item)}
            >
                <FiTrash2 size={20} className="text-white" />
            </div>
            <div
                className={`flex items-center p-2 bg-gray-100 rounded-md border ${isSwiped ? '-translate-x-24' : 'translate-x-0'
                    } transition-transform duration-300`}
                onTouchStart={handleSwipeStart}
                onTouchEnd={handleSwipeEnd}
            >
                <p>{item}</p>
            </div>
        </div>
    );
};

export default SwipeToDelete;