import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);

        const handleMouseOver = (e) => {
            if (e.target.closest('[data-cursor="project"]')) {
                setCursorVariant('project');
            } else if (e.target.closest('a, button')) {
                setCursorVariant('link');
            }
        };
        
        const handleMouseOut = () => {
            setCursorVariant('default')
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    const cursorVariants = {
        default: {
            x: mousePosition.x - 5, 
            y: mousePosition.y - 5,
            height: 10,
            width: 10,
            backgroundColor: '#111111',
            border: '1px solid transparent',
        },
        link: {
            x: mousePosition.x - 20, 
            y: mousePosition.y - 20,
            height: 40,
            width: 40,
            backgroundColor: 'transparent',
            border: '1px solid #111111',
        },
        project: {
            x: mousePosition.x - 45, 
            y: mousePosition.y - 45,
            height: 90,
            width: 90,
            backgroundColor: '#111111',
            border: '1px solid transparent',
        },
    };

    const textVariants = {
        default: { opacity: 0, y: 5 },
        link: { opacity: 0, y: 5 },
        project: { 
            opacity: 1, 
            y: 0, 
            transition: { delay: 0.1, duration: 0.3 } 
        },
    };

    return (
        <motion.div
            className="fixed top-0 left-0 z-9999 rounded-full pointer-events-none hidden md:flex items-center justify-center"
            variants={cursorVariants}
            animate={cursorVariant}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
            <motion.span
                className="text-white text-[12px] text-center font-medium tracking-wider uppercase"
                variants={textVariants}
                animate={cursorVariant}
            >
                View Project
            </motion.span>
        </motion.div>
    );
};

export default CursorFollower;