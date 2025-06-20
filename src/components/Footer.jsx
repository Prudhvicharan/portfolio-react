import React, { useContext } from "react";
import { Link } from "react-scroll";
import ThemeContext from "../context/ThemeContext";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`footer ${darkTheme ? "dark" : ""}`}>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Sai Prudhvi Charan Pothumsetty</h2>
            <p>Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="experience" smooth={true} duration={500}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="education" smooth={true} duration={500}>
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="skills" smooth={true} duration={500}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h3>Connect</h3>
              <div className="social-icons">
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
                <a
                  href="mailto:bunnycharanprudhvi@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Sai Prudhvi Charan Pothumsetty.
            All Rights Reserved.
          </p>
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
