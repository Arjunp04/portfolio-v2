"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";
import Contact from "./components/Contact";

const Home = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-colors duration-300`}
    >
      <div className="max-w-350 mx-auto px-4">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-1">
          <Hero />
          <Stats />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
