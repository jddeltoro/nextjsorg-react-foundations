'use client';
import { useState } from 'react';
export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    
    /**
     * Increments the like count when the button is clicked.
     */
    function handleClick() {        
        setLikes(likes + 1);
    }

    return (
        <button onClick={handleClick}>Like ({likes})</button>
    );
}