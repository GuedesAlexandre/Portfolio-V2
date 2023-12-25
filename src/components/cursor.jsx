import React, { useEffect, useState } from 'react';
import '../App.css';

const Cursor = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [expand, setExpand] = useState(false);
    const [isTextHovered, setIsTextHovered] = useState(false);

    useEffect(() => {
        const updateCursorPos = (e) => {
            setCursorPos({ x: e.pageX - 20, y: e.pageY - 20 });
        };

        const clickListener = () => {
            setExpand(true);
            setTimeout(() => setExpand(false), 500);
        };

        const textHoverEnterListener = () => {
            setIsTextHovered(true);
        };

        const textHoverLeaveListener = () => {
            setIsTextHovered(false);
        };

        document.addEventListener('mousemove', updateCursorPos);
        document.addEventListener('click', clickListener);
        document.addEventListener('mouseenter', textHoverEnterListener);
        document.addEventListener('mouseleave', textHoverLeaveListener);

        return () => {
            document.removeEventListener('mousemove', updateCursorPos);
            document.removeEventListener('click', clickListener);
            document.removeEventListener('mouseenter', textHoverEnterListener);
            document.removeEventListener('mouseleave', textHoverLeaveListener);
        };
    }, []);

    return (
        <div 
            className={`cursor ${expand ? 'expand' : ''} ${isTextHovered ? 'text-hovered' : ''}`} 
            style={{ top: cursorPos.y, left: cursorPos.x }}
        />
    );
};

export default Cursor;