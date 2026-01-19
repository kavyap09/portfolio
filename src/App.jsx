import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
     <div className="relative min-h-screen text-white bg-[#0b0f19] overflow-hidden">
  
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
