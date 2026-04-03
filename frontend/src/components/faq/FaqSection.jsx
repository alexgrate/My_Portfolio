import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedItem from '../AnimatedItem';

const faqs = [
    {
        id: "01",
        question: "What services do you offer?",
        answer: "I specialize in full-stack web development — building complete, scalable applications with Django (Python) backends, React.js frontends, REST APIs, Tailwind CSS, and Framer Motion. From database design to deployment, I handle the entire technical stack.",
    },
    {
        id: "02",
        question: "Do you provide revisions?",
        answer: "Yes! Every project includes two full rounds of revisions so we can refine the features, design, and performance until it perfectly matches your vision. Additional revisions are available if needed.",
    },
    {
        id: "03",
        question: "How do I start working with you?",
        answer: "Simply reach out through the contact form or book a quick call. We'll discuss your project goals, technical requirements, timeline, and how we can work together to bring your idea to life.",
    },
    {
        id: "04",
        question: "What is your pricing structure?",
        answer: "Pricing is project-based and depends on scope, complexity, and timeline. I provide a transparent, detailed quote after our initial discussion so you know exactly what to expect.",
    },
    {
        id: "05",
        question: "How long does a project take?",
        answer: "Timelines vary based on complexity. A typical full-stack web application takes 4–8 weeks from kickoff to launch. I’ll give you a clear milestone schedule during our first call.",
    },
];

const FaqItem = ({ faq, isInitiallyOpen, delay }) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <AnimatedItem
            delay={delay}
            className="overflow-hidden rounded-xl bg-[#f7f7f7] transition-colors duration-300 hover:bg-[#f0f0f0]"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-5 py-5 md:px-6 md:py-6 text-left"
            >
                <span className="text-[16px] md:text-[17px] font-medium text-gray-900 tracking-tight">
                    {faq.question}
                </span>
                <div className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#c4c4c4] text-white transition-transform duration-300">
                    <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </motion.svg>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease:[0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                            <p className="text-[15px] leading-relaxed text-gray-500">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimatedItem>
    );
};

const FaqSection = () => {
    return (
        <section id="faq" className="flex flex-col items-center bg-white px-6 py-20 md:px-12 md:py-32">
            <div className="w-full max-w-160 flex flex-col">
                <AnimatedItem delay={0} className="mb-10 md:mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase">
                            FAQ'S
                        </span>
                    </div>
                    <h2 className="hero-serif text-[#111111] text-[2.5rem] leading-[1.05] tracking-tight md:text-[3.25rem]">
                        Your concerns, addressed with clarity
                    </h2>
                </AnimatedItem>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={faq.id}
                            faq={faq}
                            isInitiallyOpen={index === 0} 
                            delay={0.15 + index * 0.15}
                        />
                    ))}
                </div>

                <AnimatedItem
                    delay={0.9}
                    className="mt-24 flex flex-col items-center justify-center text-center px-4"
                >
                    <h3 className="logo-font text-[2rem] md:text-[2.5rem] text-gray-400 mb-8 opacity-80 leading-tight">
                        Still have questions? Feel free to get in touch today!
                    </h3>

                    <a
                        href="#contact"
                        className="flex items-center gap-3 rounded-full bg-black px-8 py-4 text-[15px] font-semibold text-white transition-all hover:scale-105"
                        style={{ boxShadow: "0 15px 35px -10px rgba(0,0,0,0.8)" }}
                    >
                        Get In Touch Today
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </AnimatedItem>
            </div>
        </section>
    );
}

export default FaqSection