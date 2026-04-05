import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import videoBg from "../../assets/videoBg.mp4"
import profileImg from "../../assets/ProfileImg.jpeg"
import profileImg002 from "../../assets/ProfileImg002.png"
import uiImg from "../../assets/UiImage.avif"
import mapImg from "../../assets/MapImg.avif"
import AnimatedItem from '../AnimatedItem'

const HeroSection = () => {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  
  const[isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
      
      if (videoRef.current.readyState >= 3) {
        setIsVideoLoaded(true)
      }
    }

    const fallbackTimer = setTimeout(() => setIsVideoLoaded(true), 2500)
    return () => clearTimeout(fallbackTimer)
  },[])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id='hero'
      ref={sectionRef}
      className='relative min-h-[75vh] w-full overflow-hidden bg-[#f7f7f7]'
    >
      <div className='absolute inset-y-0 right-0 z-0 w-full md:w-[60%] video-mask opacity-60 mix-blend-multiply'>
        <video
          ref={videoRef}
          autoPlay
          muted 
          loop
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className='h-full w-full object-cover'
        >
          <source src={videoBg} type='video/mp4' />
        </video>
      </div>

      <motion.div
        style={{ y, opacity }}
        className='relative z-10 flex min-h-[75vh] flex-col justify-center px-6 pb-16 pt-24 md:px-16 lg:px-32'
      >
        {isVideoLoaded && (
          <div className='flex max-w-3xl flex-col gap-2 md:gap-4'>
            <AnimatedItem delay={0.4} className='flex flex-wrap items-center gap-3 md:gap-5'>
              <span className='hero-serif text-[#999999]'>Hey, I'm</span>
              <div className='img-chip chip-shadow w-16 h-10 md:w-24 md:h-14 rounded-full overflow-hidden border-[1.5px] border-gray-300'>
                <img src={profileImg} alt='Alex' className='h-full w-full object-cover' />
              </div>
              <span className='hero-serif text-[#111111]'>Alex</span>
            </AnimatedItem>

            <AnimatedItem delay={0.55} className='flex flex-wrap items-center gap-3 md:gap-5'>
              <span className='hero-serif text-[#111111]'>FullStack Developer</span>
              <div className="img-chip chip-shadow w-12 h-10 md:w-16 md:h-14 rounded-[30px] overflow-hidden border-[1.5px] border-gray-300">
                <img src={profileImg002} alt="Dominion" className='h-full w-full object-cover' />
              </div>
              <div className="img-chip chip-shadow w-20 h-10 md:w-32 md:h-14 rounded-[30px] overflow-hidden border-[1.5px] border-gray-300 bg-black">
                <img src={uiImg} alt="UI Mockup" className="h-full w-full object-cover opacity-80" />            
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.7} className='flex flex-wrap items-center gap-3 md:gap-5'>
              <span className='hero-serif text-[#999999]'>Living in</span>
              <div className="img-chip chip-shadow w-16 h-10 md:w-24 md:h-14 rounded-full overflow-hidden border-[1.5px] border-gray-300">
                <img src={mapImg} alt="Map" className='h-full w-full object-cover' />
              </div>
              <span className='hero-serif text-[#111111]'>Lagos</span>
            </AnimatedItem>

            <AnimatedItem delay={0.85} className="mt-6 max-w-120 text-[17px] leading-relaxed text-gray-500 font-medium">
              Full Stack Developer building end-to-end web applications that users love and businesses grow with.
            </AnimatedItem>

            <AnimatedItem delay={1.0} className='mt-8'>
              <a 
                href='#contact'
                className='inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-105 btn-glow w-max'
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
        )}
      </motion.div>
    </section>
  )
}

export default HeroSection