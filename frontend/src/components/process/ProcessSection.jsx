import { motion } from "framer-motion"
import AnimatedItem from '../AnimatedItem'

const AnimatedCalendar = () => (
    <motion.svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <motion.path d="M8 14h.01" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} />
        <motion.path d="M12 14h.01" animate={{ opacity:[0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} />
        <motion.path d="M16 14h.01" animate={{ opacity:[0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} />
        <motion.path d="M8 18h.01" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }} />
        <motion.path d="M12 18h.01" animate={{ opacity:[0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.8 }} />
        <motion.path d="M16 18h.01" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }} />
    </motion.svg>
)

const AnimatedHand = () => (
    <motion.svg 
        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800"
        animate={{ rotate: [0, 8, -4, 0] }} 
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        style={{ originX: "50%", originY: "100%" }} 
    >
        <path d="M18 11V6a2 2 0 0 0-4 0v4"></path>
        <path d="M14 10V4a2 2 0 0 0-4 0v6"></path>
        <path d="M10 10.5V3a2 2 0 0 0-4 0v9"></path>
        <path d="M6 13.5V9a2 2 0 0 0-4 0v6a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8v-3.5a2 2 0 0 0-4 0V11"></path>
    </motion.svg>
);

const AnimatedWireframe = () => (
    <motion.svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
        <motion.line x1="13" y1="13" x2="17" y2="13" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
        <motion.line x1="13" y1="17" x2="15" y2="17" animate={{ opacity:[0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }} />
    </motion.svg>
);

const AnimatedBlocks = () => (
    <motion.svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
        <motion.rect x="3" y="3" width="7" height="7" rx="1" animate={{ y:[0, -2.5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0 }} />
        <motion.rect x="14" y="3" width="7" height="7" rx="1" animate={{ y: [0, -2.5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }} />
        <motion.rect x="14" y="14" width="7" height="7" rx="1" animate={{ y: [0, -2.5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }} />
        <motion.rect x="3" y="14" width="7" height="7" rx="1" animate={{ y:[0, -2.5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }} />
    </motion.svg>
);

const steps = [
    {
        id: "001",
        step: "step1",
        title: "Let's Get In Touch",
        description: "Reach out via the contact form or book a quick call. We'll discuss your project goals, timeline, technical requirements, and how we can work together to bring your idea to life.",
        icon: <AnimatedCalendar />,
    },
    {
        id: "002",
        step: "step2",
        title: "Plan The Architecture",
        description: "I map out the full technical plan — database structure, API design, frontend architecture, and the exact tech stack (Django backend, React frontend, etc.) to ensure scalability and performance from day one.",
        icon: <AnimatedHand />,
    },
    {
        id: "003",
        step: "step3",
        title: "Kickstart Development",
        description: "I build the complete application — clean, responsive interfaces with React + Tailwind, robust backend logic with Django + REST Framework, and everything connected through well-documented APIs.",
        icon: <AnimatedWireframe />,
    },
    {
        id: "004",
        step: "step4",
        title: "Launch & Hand Over",
        description: "Thorough testing, deployment, final polishing, and knowledge transfer. You receive a fully functional, production-ready web application with ongoing support if needed.",
        icon: <AnimatedBlocks />,
    },
];

const ProcessSection = () => {
    return (
        <section className="flex flex-col items-center bg-white px-6 py-20 md:px-12 md:py-32 overflow-hidden">
            <div className="w-full max-w-160 flex flex-col">
                <AnimatedItem delay={0} className="mb-12 md:mb-16 pl-1 sm:pl-1.25">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                        <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">Process</span>
                    </div>
                    <h2 className="hero-serif text-[#111111] text-[2.5rem] leading-[1.05] tracking-tight md:text-[3.25rem]">
                        My process for building production-ready web applications
                    </h2>
                </AnimatedItem>

                <div className="relative">
                    <div className="absolute left-1.5 sm:left-1.75 top-4 bottom-10 w-px bg-gray-200/80"></div>

                    <div className="flex flex-col gap-8 md:gap-10">
                        {steps.map((step, index) => (
                            <AnimatedItem
                                key={step.id}
                                delay={0.15 + index * 0.15}
                                className="relative flex gap-6 sm:gap-10"
                            >
                                <div className="relative z-10 mt-11">
                                    <div className="w-3.25 h-3.25 rounded-full bg-[#111111] ring-4 ring-white">
                                    </div>
                                </div>

                                <div className="flex-1 rounded-3xl bg-[#f7f7f7] p-6 sm:p-10 transition-shadow duration-300 hover:shadow-md hover:shadow-gray-200/50">
                                    <span className="block text-sm font-medium text-gray-500 mb-4">
                                        {step.step}
                                    </span>
                                    
                                    <h3 className="text-xl sm:text-2xl font-medium text-[#111111] mb-4 tracking-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-[15px] sm:text-[16px] text-gray-500 leading-relaxed mb-12 sm:mb-16">
                                        {step.description}
                                    </p>

                                    <div className="flex items-end justify-between">
                                        <div className="opacity-70">
                                            {step.icon}
                                        </div>
                                        <span className="text-[13px] font-medium text-gray-400">
                                        - {step.id}
                                        </span>
                                    </div>
                                </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection