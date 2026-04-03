import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react"
import AnimatedItem from "../AnimatedItem";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/alexgrate",
        icon: <Github />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/aigbodion-dominion-336263254",
        icon: <Linkedin />,
    },
    {
        label: "X",
        href: "https://x.com/heisalexxx?s=21",
        icon: <Twitter />,
    },
];


const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-[#f7f7f7] px-6 pb-24 pt-12 md:px-12 md:pb-28 md:pt-16">
            <div className="flex w-full max-w-2xl flex-col items-center">
                <AnimatedItem delay={0} className="w-full text-center">
                    <h1
                        className="hero-serif tracking-tight text-[#111111]"
                        style={{ fontSize: "clamp(5rem, 18vw, 11rem)", lineHeight: "0.9" }}
                    >
                        Alex
                    </h1>
                </AnimatedItem>

                <AnimatedItem delay={0.1} className="w-full text-center">
                    <p className="mt-4 max-w-xl text-center text-[15px] leading-relaxed text-gray-500 md:mt-6 md:text-[16px]">
                        Full Stack Developer based in Lagos. I build fast, scalable web
                        applications with Django, React, Tailwind, and modern APIs —
                        turning ideas into production-ready digital products.
                    </p>
                </AnimatedItem>

                <AnimatedItem delay={0.2} className="mt-10 w-full md:mt-12">
                    <div className="flex w-full flex-col gap-4 md:gap-5">
                                
                        <div className="flex w-full items-center gap-4 md:gap-6">
                            <a 
                                href="mailto:alexgrate606@gmail.com" 
                                className="whitespace-nowrap text-[15px] md:text-[16px] font-medium text-gray-900 transition-colors hover:text-gray-500"
                            >
                                alexgrate606@gmail.com
                            </a>
                            <div className="h-px flex-1 bg-gray-300/80"></div>
                        </div>

                        <div className="flex w-full items-center gap-4 md:gap-6">
                            <div className="h-px flex-1 bg-gray-300/80" />
                            <div className="flex items-center gap-5 text-gray-500">
                                {socials.map(({ label, href, icon }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        whileHover={{ y: -3, color: "#111" }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        className="transition-colors"
                                    >
                                        {icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedItem>

                <AnimatedItem
                    delay={0.3}
                    className="mt-8 w-full md:mt-10"
                >
                <div className="flex w-full items-center justify-between text-[14px] font-medium text-gray-400">
                    <span>© 2025 Alex</span>
                    <span>All Rights Reserved</span>
                </div>
                </AnimatedItem>

            </div>
        </footer>
    );
}

export default Footer