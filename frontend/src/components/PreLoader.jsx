import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const greetings =[
    "Hello",       
    "Bonjour",     
    "Hola",       
    "Ndewo",      
    "Sannu",     
    "Bawo ni",    
    "Hello",   
];

const PreLoader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === greetings.length - 1) {
            setTimeout(() => {
                onComplete();
            }, 800);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 180);

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-999999 flex items-center justify-center bg-[#111111]"
            exit={{ 
                y: "-100%", 
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
        >
            <div className="flex items-center gap-3 md:gap-4 text-white text-4xl md:text-5xl">
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white mb-1"></span>
                
                <h1 className="hero-serif text-white tracking-tight m-0 p-0">
                    {greetings[index]}
                </h1>
            </div>
        </motion.div>
    );
};

export default PreLoader;