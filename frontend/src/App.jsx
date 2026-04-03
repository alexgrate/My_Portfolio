import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CursorFollower from "./components/cursor/CursorFollower";


import HeroSection from "./components/home/HeroSection"
import ProjectsSection from "./components/project/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProcessSection from "./components/process/ProcessSection";
import ServicesSection from "./components/service/ServicesSection";
import FaqSection from "./components/faq/FaqSection";
import ContactSection from "./components/contact/ContactSection";

import ProjectDetails from "./pages/ProjectDetails";

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
  return (
    <Router>
      <div className="bg-white">
        <CursorFollower />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
