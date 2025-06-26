import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme || "dark-theme"; // Default to dark theme
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme); // Persist theme choice
  };

  useEffect(() => {
    document.body.className = theme;
    // Also save to localStorage whenever theme changes
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
