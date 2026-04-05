import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CursorFollower from "./components/cursor/CursorFollower";
import PreLoader from "./components/PreLoader";

import HeroSection from "./components/home/HeroSection"
import ProjectsSection from "./components/project/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProcessSection from "./components/process/ProcessSection";
import ServicesSection from "./components/service/ServicesSection";
import FaqSection from "./components/faq/FaqSection";
import ContactSection from "./components/contact/ContactSection";
import ProjectDetails from "./pages/ProjectDetails";
import AllProjects from "./pages/AllProjects";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <ProcessSection />
    <ServicesSection />
    <FaqSection />
    <ContactSection />
  </>
)


const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    const hasVisited = sessionStorage.getItem("hasVisited")
    return !hasVisited
  })

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isLoading])

  const handleLoaderComplete = () => {
    setIsLoading(false)
    sessionStorage.setItem("hasVisited", "true")
  }


  return (
    <Router>
      <ScrollToTop />
      
      <div className="bg-white">
        <AnimatePresence mode="wait">
          {isLoading && (
            <PreLoader 
              key="preloader"
              onComplete={handleLoaderComplete}
            />
          )}
        </AnimatePresence>

        <CursorFollower />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
