import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const useReveal = (margin = "-80px") => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin });
    return { ref, isInView };
};

const makeVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.45, ease: [0.4, 0, 1, 1], delay: 0 },
    },
});

export default function AnimatedItem({ children, delay = 0, className = "", style = {}, margin = "-80px" }) {
    const { ref, isInView } = useReveal(margin);
    
    return (
        <motion.div
            ref={ref}
            variants={makeVariants(delay)}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}