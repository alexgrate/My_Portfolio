import coverImg from "../../assets/coverImg.jpg"
import profileImg from "../../assets/ProfileImg.jpeg"
import AnimatedItem from '../AnimatedItem'

const skills = ["Python", "Django", "Django REST Framework", "APIs", "React.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Git", "GitHub"]

const experiences = [
    { id: 1, role: "Backend Engineer", company: "Afrivate", date: "2026 - Present" },
    { id: 2, role: "Full Stack Developer", company: "Lozenge", date: "2026 - Present" },
];

const SkillsSection = () => {
    return (
        <section
            className="flex flex-col items-center bg-white px-6 py-20 md:px-12 md:py-32"
        >
            <div className="w-full max-w-160 flex flex-col">
                <AnimatedItem delay={0} className="mb-10 md:mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase">Skills & Expertise</span>
                    </div>
                    <h2 className="hero-serif text-[#111111] text-[2.5rem] leading-[1.05] tracking-tight md:text-5xl">
                        The skills that power my full-stack applications
                    </h2>
                </AnimatedItem>

                <AnimatedItem
                    delay={0.15}
                    className="w-full rounded-3xl border border-gray-200/60 bg-white p-2 md:p-3 shadow-sm mb-12"
                >
                    <div className="relative h-40 md:h-52 w-full overflow-hidden rounded-2xl bg-gray-100">
                        <img src={coverImg} alt="Workspace" className="h-full w-full object-cover grayscale" />
                    </div>

                    <div className="relative z-10 px-4 md:px-6 -mt-12 sm:-mt-14 pb-4 md:pb-6">
                        <div className="h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-full border-[6px] border-[#111111] bg-black shadow-xl">
                            <img src={profileImg} alt="Alex" className="h-full w-full object-cover grayscale" />
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2 md:gap-2.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-xl bg-[#f4f4f4] px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimatedItem>

                <div className="flex flex-col gap-3">
                    {experiences.map((exp, index) => (
                        <AnimatedItem
                            key={exp.id}
                            delay={0.3 + index * 0.1}
                            className="group flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-[#f7f7f7] p-5 md:px-6 transition-all duration-300 hover:bg-[#f0f0f0]"
                        >
                            <span className="text-[16px] sm:text-[15px] font-medium text-gray-800 w-1/3">{exp.role}</span>
                            <div className="flex items-center justify-between sm:w-2/3 mt-1 sm:mt-0">
                                <span className="text-[14px] sm:text-[15px] text-gray-500 w-1/2 sm:text-center">{exp.company}</span>
                                <span className="text-[13px] sm:text-[14px] text-gray-400 w-1/2 sm:text-right">{exp.date}</span>
                            </div>
                            
                        </AnimatedItem>
                    ))}
                </div>

                <AnimatedItem 
                    delay={0.5}
                    className="mt-24 flex flex-col items-center justify-center text-center px-4"
                >
                    <h3 className="logo-font text-3xl md:text-4xl text-gray-400 mb-8 opacity-80">
                        Ready to build something great together?
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
    )
}

export default SkillsSection