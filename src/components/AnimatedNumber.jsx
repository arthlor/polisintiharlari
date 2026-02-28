import React, { useEffect, useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

export default function AnimatedNumber({ value }) {
    const { isVisible, domRef } = useFadeIn();
    const [displayVal, setDisplayVal] = useState('');

    useEffect(() => {
        if (!isVisible) return;

        const duration = 1200;
        let startTime = null;
        let animationFrame;
        const chars = '0123456789%+.';
        const valStr = value.toString();

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                let gibberish = '';
                for (let i = 0; i < valStr.length; i++) {
                    gibberish += chars[Math.floor(Math.random() * chars.length)];
                }
                setDisplayVal(gibberish);
                animationFrame = requestAnimationFrame(animate);
            } else {
                setDisplayVal(valStr);
            }
        };
        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, value]);

    return <span ref={domRef} style={{ display: 'inline-block', minWidth: `${value.toString().length}ch` }}>{displayVal || value}</span>;
}
