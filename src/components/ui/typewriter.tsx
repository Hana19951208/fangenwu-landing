import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    pause?: number;
    className?: string;
}

export function Typewriter({ text, speed = 50, pause = 2000, className }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Clean up effect when text changes to reset
    useEffect(() => {
        setDisplayedText('');
        indexRef.current = 0;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        const type = () => {
            const currentIndex = indexRef.current;

            // If we've reached the end
            if (currentIndex >= text.length) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayedText('');
                    indexRef.current = 0;
                    type();
                }, pause);
                return;
            }

            setDisplayedText(text.slice(0, currentIndex + 1));
            indexRef.current++;

            // Randomize speed slightly for human-like effect (±30ms)
            const randomSpeed = speed + (Math.random() * 100 - 30);
            timeoutRef.current = setTimeout(type, randomSpeed);
        };

        type();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text, speed, pause]);

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse ml-1 opacity-70">|</span>
        </span>
    );
}
