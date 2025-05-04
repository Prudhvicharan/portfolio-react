import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../context/ThemeContext";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Home.css";
const Home = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`home-container ${darkTheme ? "dark" : ""}`}>
      <div className="home-content">
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm <span className="highlight">John Doe</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about creating beautiful, functional, and user-centered
            digital experiences. With over 3.5 years of experience in building
            web applications with modern technologies.
          </motion.p>
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="mailto:email@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="profile-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hexagon">
            <div className="hexagon-inner">
              <img src="/profile-placeholder.jpg" alt="John Doe" />
            </div>
          </div>
          <div className="blob-background"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
