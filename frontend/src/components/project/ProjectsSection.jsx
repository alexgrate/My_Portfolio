import { useState, useEffect } from 'react';
import AnimatedItem from '../AnimatedItem';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetch('p01--alexdominion--fmvjx7pzd27y.code.run/api/projects/')
          .then(res => res.json())
          .then(data => setProjects(data))
          .catch(err => console.error("Error fetching projects:", err)); 
  },[]); 
  
  return (
    <section
      id="projects"
      className="flex flex-col items-center bg-white px-6 py-24 md:px-12 md:py-32"
    >
      <div className="w-full max-w-160 flex flex-col">
        <AnimatedItem delay={0} className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">My Projects</span>
          </div>
          <h2 className="hero-serif text-[#111111] max-w-xl text-[2.5rem] leading-[1.05] tracking-tight md:text-5xl">
            The designs that turn vision into reality
          </h2>
        </AnimatedItem>

        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, index) => (
            <AnimatedItem key={project.id} delay={0.1}>
              <a
                href={`/project/${project.slug}`} 
                data-cursor="project"
                className="group block w-full rounded-3xl border border-gray-200/60 bg-white p-2 transition-shadow duration-500 hover:shadow-xl hover:shadow-gray-200/40"
              >
                <div className="relative aspect-4/3 md:aspect-[1.4/1] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <img 
                    src={project.cover_image}
                    alt={project.title}  
                    className="h-full w-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105" 
                  />
                </div>

                <div className="flex items-center justify-between px-4 py-5 md:px-6 md:py-6">
                  <h3 className="text-xl font-medium text-gray-900 tracking-tight">{project.title}</h3>
                  <div className="text-gray-400 transition-colors duration-300 group-hover:text-black">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem delay={0.2} className="mt-16 flex justify-center">
          <a 
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-[#f4f4f4] px-6 py-3.5 text-sm font-medium text-gray-900 transition-colors hover:bg-[#e8e8e8]"
          >
            See All
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </AnimatedItem>
      </div>
    </section>
  )
}

export default ProjectsSection