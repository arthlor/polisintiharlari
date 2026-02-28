import React, { useEffect, useState, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

export default function TypewriterNote({ htmlContent }) {
    const { isVisible, domRef } = useFadeIn(0.5); // trigger when 50% visible so text types out naturally upon reading
    const [typedHtml, setTypedHtml] = useState('');
    const hasTyped = useRef(false);

    useEffect(() => {
        if (!isVisible || hasTyped.current) return;
        hasTyped.current = true;

        // A basic simulated typing effect for HTML. 
        // We'll reveal it character by character, ensuring we don't break HTML tags mid-typing.
        let i = 0;
        let finalHtml = '';
        let isTag = false;

        const interval = setInterval(() => {
            if (i >= htmlContent.length) {
                clearInterval(interval);
                return;
            }

            const char = htmlContent[i];
            finalHtml += char;

            if (char === '<') isTag = true;
            if (char === '>') isTag = false;

            // If we are inside an HTML tag, don't update state right away, just keep building.
            if (!isTag && char !== '<') {
                setTypedHtml(finalHtml);
            }
            i++;
        }, 15); // incredibly fast typing to not annoy reader

        return () => clearInterval(interval);
    }, [isVisible, htmlContent]);

    return (
        <div
            ref={domRef}
            className="evidence-note typewriter-reveal"
            dangerouslySetInnerHTML={{ __html: typedHtml || '<span style="opacity:0">.</span>' }}
        />
    );
}
