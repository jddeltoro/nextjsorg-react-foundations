'use client';
import { useState } from 'react';
export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    
    /**
     * Increments the like count when the button is clicked.
     */
    function handleClick() {        
        setLikes(likes + 1);
        animateButton();
    }

    /**
     * Animates the button when it is clicked.
     */
    function animateButton() {
        const button = document.querySelector('button');
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 500);
    }

    return (
        <button onClick={handleClick}>Like ({likes})</button>
    );
}