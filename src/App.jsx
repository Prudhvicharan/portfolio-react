import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
