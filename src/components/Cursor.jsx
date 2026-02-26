import React, { useEffect } from 'react';

export default function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
        if (!cursor) return;

        const onMouseMove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        const addHover = () => cursor.classList.add('hover');
        const removeHover = () => cursor.classList.remove('hover');

        document.addEventListener('mousemove', onMouseMove);

        // Attach event listeners to document for dynamic elements
        const onMouseOver = (e) => {
            if (e.target.closest('a, button, .evidence-card, .timeline-item, .card-mechanism')) {
                addHover();
            }
        };
        const onMouseOut = (e) => {
            if (e.target.closest('a, button, .evidence-card, .timeline-item, .card-mechanism')) {
                removeHover();
            }
        };

        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

    return <div className="custom-cursor"></div>;
}
