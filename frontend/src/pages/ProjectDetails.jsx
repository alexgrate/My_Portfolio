import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease:[0.16, 1, 0.3, 1] },
    },
};

export default function ProjectDetails() {
    const { slug } = useParams(); 
    const [project, setProject] = useState(null);
    const [otherProjects, setOtherProjects] = useState([]);

    useEffect(() => {
        fetch(`p01--alexdominion--fmvjx7pzd27y.code.run/api/projects/${slug}/`)
        .then(res => res.json())
        .then(data => setProject(data))
        .catch(err => console.error(err));

        fetch(`p01--alexdominion--fmvjx7pzd27y.code.run/api/projects/`)
        .then(res => res.json())
        .then(data => {
            const filtered = data.filter(p => p.slug !== slug).slice(0, 3);
            setOtherProjects(filtered);
        })
        .catch(err => console.error(err));
        
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#111111]"></div>
        </div>
        );
    }

    return (
        <div className="flex flex-col items-center bg-white px-6 pb-32 pt-32 md:px-12 md:pt-40">
            <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-160 flex flex-col"
            >
                <motion.div variants={itemVariants} className="flex flex-col gap-6">
                <h1 className="hero-serif text-[#111111] text-[3.5rem] leading-none tracking-tight md:text-[4.5rem]">
                    {project.title}
                </h1>
                
                <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-500 max-w-125">
                    {project.description}
                </p>

                {project.live_link && (
                    <div>
                        <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-[14px] font-semibold text-white transition-transform hover:scale-105"
                            style={{ boxShadow: "0 12px 30px -10px rgba(0,0,0,0.8)" }}
                        >
                            Live Preview
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                )}
                
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-gray-200/60 pt-8"
                >
                    <div className="flex flex-col gap-1">
                        <span className="italic text-[18px] text-gray-800">Client</span>
                        <span className="text-[15px] text-gray-500">{project.client || "N/A"}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="italic text-[18px] text-gray-800">Services</span>
                        <span className="text-[15px] text-gray-500">{project.services || "N/A"}</span>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                        <span className="italic text-[18px] text-gray-800">Timeline</span>
                        <span className="text-[15px] text-gray-500">{project.timeline || "N/A"}</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-12">
                    <div className="w-full rounded-3xl border border-gray-200/60 bg-white p-2 md:p-3 shadow-sm">
                        <div className="relative aspect-4/3 md:aspect-1.5/1 w-full overflow-hidden rounded-2xl bg-gray-100">
                            <img src={project.cover_image} alt={project.title} className="h-full w-full object-cover" />
                        </div>
                    </div>
                </motion.div>

                {project.detail_image && (
                    <motion.div variants={itemVariants} className="mt-12 md:mt-16">
                        <div className="w-full rounded-3xl border border-gray-200/60 bg-white p-2 md:p-3 shadow-sm">
                            <div className="relative aspect-4/3 md:aspect-1.5/1 w-full overflow-hidden rounded-2xl bg-gray-100">
                            <img src={project.detail_image} alt={`${project.title} Details`} className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </motion.div>
                )}

                <motion.div variants={itemVariants} className="my-20 h-px w-full bg-gray-200/80"></motion.div>

                {otherProjects.length > 0 && (
                    <motion.div variants={itemVariants} className="flex flex-col gap-8">
                        <h2 className="hero-serif text-[#111111] text-[2.5rem] leading-[1.05] tracking-tight md:text-[3.25rem] max-w-100">
                            Check out some of my recent projects.
                        </h2>

                        <div className="flex flex-wrap gap-4 md:gap-6">
                            {otherProjects.map((p, index) => (
                                <a
                                    key={p.id}
                                    href={`/project/${p.slug}`}
                                    data-cursor="project"
                                    className={`group block rounded-3xl border border-gray-200/60 bg-white p-2 transition-shadow duration-500 hover:shadow-xl hover:shadow-gray-200/40 ${
                                    project.halfWidth ? "w-full sm:w-[calc(50%-12px)]" : "w-full"
                                    }`}
                                >
                                    <div className="relative aspect-4/3 md:aspect-1.4/1 w-full overflow-hidden rounded-2xl bg-gray-100">
                                        <img 
                                            src={p.cover_image} 
                                            alt={p.title}  
                                            className="h-full w-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105" 
                                        />
                                    </div>

                                    <div className="flex items-center justify-between px-3 py-4 md:px-5 md:py-5">
                                        <h3 className="text-[17px] font-medium text-gray-900 tracking-tight">{p.title}</h3>
                                        <div className="text-gray-400 transition-colors duration-300 group-hover:text-black">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-1 group-hover:translate-x-1">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-4 flex">
                            <a 
                                href="/#projects" 
                                className="group flex items-center gap-2 rounded-full bg-[#f4f4f4] px-6 py-3.5 text-sm font-medium text-gray-900 transition-colors hover:bg-[#e8e8e8]"
                            >
                                See All
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                )}


            </motion.div>
        </div>
    );
}