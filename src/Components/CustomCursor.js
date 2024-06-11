// CustomCursor.js
import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // Import custom cursor CSS
import svgCursor from './car.svg'; // Import your SVG cursor

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <img src={svgCursor} alt="custom cursor" className="custom-cursor" style={{ left: position.x, top: position.y }} />
    );
};

export default CustomCursor;