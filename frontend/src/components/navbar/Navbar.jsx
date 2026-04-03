import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const navLinks =[
  { label: "Home",     href: "#hero"     },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.4
    }
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeItem = navLinks.find(
            (link) => link.href.substring(1) === entry.target.id
          );
          if (activeItem) {
            setActive(activeItem.label);
          }
        }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.substring(1); 
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => observer.disconnect();
  },[]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease:[0.16, 1, 0.3, 1], delay: 0.4 }}
        className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12'
        style={{
          background: "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "background 0.4s ease",
        }}
      >
        <a
          href='/'
          onClick={() => setActive("Home")}
          className='logo-font text-3xl font-normal text-black transition-opacity hover:opacity-60'
        >
          Alex Dominion
        </a>

        <div className='flex items-center gap-2 md:pr-4'>
          <span className='relative flex h-2.5 w-2.5'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-70' />
            <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34d399]' />
          </span>
          <span className='text-sm font-medium text-gray-800 tracking-wide'>
            <span className='md:hidden'>available</span>
            <span className='hidden md:inline'>available for work</span>
          </span>
        </div>
      </motion.div>

      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1], delay: 1 }}
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div 
          className='flex items-center rounded-full p-2'
          style={{
            background: "rgba(35, 35, 35, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className='relative rounded-full transition-colors px-4 py-2 text-[13px] tracking-wide'
              style={{
                color: active === link.label ? "#fff" : "rgba(255, 255, 255, 0.6)",
                fontWeight: active === link.label ? 500 : 400,
              }}
            >
              {active === link.label && (
                <motion.span layoutId='nav-pill' className='absolute inset-0 rounded-full bg-white/10' transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
              )}
              <span className='relative'>
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar