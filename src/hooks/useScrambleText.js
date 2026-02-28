import { useState, useEffect } from 'react';

export function useScrambleText(text, duration = 1500, delay = 0) {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>{}[]';
        let startTime = null;
        let animationFrame;
        
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const revealFraction = Math.min(progress / duration, 1);
            
            const numRevealed = Math.floor(revealFraction * text.length);
            
            let currentStr = text.substring(0, numRevealed);
            // Add scrambled remaining characters
            for (let i = numRevealed; i < text.length; i++) {
                if (text[i] === ' ') {
                    currentStr += ' ';
                } else {
                    currentStr += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            
            setDisplayText(currentStr);
            
            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setDisplayText(text);
            }
        };
        
        const timeout = setTimeout(() => {
            animationFrame = requestAnimationFrame(animate);
        }, delay);
        
        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(timeout);
        };
    }, [text, duration, delay]);
    
    return displayText;
}
