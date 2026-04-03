import AnimatedItem from '../AnimatedItem'

const services = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        imgFront: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    },
    {
        id: 2,
        title: "Django Backend Development",
        imgFront: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    },
    {
        id: 3,
        title: "React Frontend Development",
        imgFront: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
        id: 4,
        title: "API Development & Integrations",
        imgFront: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    },
];

const tags = [
    "Django",
    "React.js",
    "Tailwind CSS",
    "REST APIs",
    "PostgreSQL",
    "Framer Motion",
    "Git & GitHub",
];

const ServicesSection = () => {
    return (
        <section 
            id="services"
            className="flex flex-col items-center bg-white px-6 py-20 md:px-12 md:py-32"
        >
            <div className="w-full max-w-160 flex flex-col">
                <AnimatedItem delay={0} className="mb-10 md:mb-14">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase">
                            Services
                        </span>
                    </div>
                    <h2 className="hero-serif text-[#111111] text-[2.5rem] leading-[1.05] tracking-tight md:text-5xl">
                        Full-stack development services that deliver real impact
                    </h2>
                </AnimatedItem>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <AnimatedItem
                            key={service.id}
                            delay={0.15 + index * 0.15}
                            className="group relative flex h-65 md:h-70 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-3xl bg-[#f7f7f7] p-6 transition-colors duration-500 hover:bg-[#f0f0f0]"
                        >
                            <div className="absolute inset-x-0 top-6 bottom-16 flex items-center justify-center">
                                <div className="absolute w-[65%] aspect-[1.4/1] rounded-xl overflow-hidden z-0 translate-x-4 -translate-y-4 rotate-3 scale-95 opacity-50 shadow-sm transition-all duration-500 ease-out group-hover:z-20 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-[0 8px 30px rgba(0, 0, 0, 0.12)]">
                                    <img
                                        src={service.imgBack}
                                        alt={`${service.title} secondary`}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>

                                <div className="absolue inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-transparent"></div>

                                <div className="absolute w-[65%] aspect-[1.4/1] rounded-xl overflow-hidden z-10 translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out group-hover:z-0 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-3 group-hover:scale-95 group-hover:opacity-50 group-hover:shadow-sm">
                                    <img
                                        src={service.imgFront}
                                        alt={service.title}
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-transparent transition-colors duration-500 group-hover:bg-black/15"></div>
                                </div>
                            </div>

                            <h3 className="relative z-10 text-[1.15rem] font-medium text-gray-900 tracking-tight">
                                {service.title}
                            </h3>
                        </AnimatedItem>
                    ))}
                </div>

                <AnimatedItem 
                    delay={0.7}
                    className="mt-8 md:mt-10 flex flex-wrap gap-2 md:gap-3"
                >
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="cursor-default rounded-xl bg-[#f7f7f7] px-4 py-2.5 text-[14px] font-medium text-gray-700 transition-colors hover:bg-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </AnimatedItem>
            </div>
        </section>
    )
}

export default ServicesSection