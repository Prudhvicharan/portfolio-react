import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Footer.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "My Journey", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/prudhvi-charan",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Prudhvicharan",
    label: "GitHub",
  },
  // {
  //   icon: <FaTwitter />,
  //   href: "https://twitter.com/Prudhvicharan",
  //   label: "Twitter",
  // },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Go to home">
              <img
                src={logo}
                alt="Prudhvi Charan"
                className="footer-logo-img"
              />
            </a>
          </div>
          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-socials">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={social.label}
                whileHover={{ scale: 1.18, y: -3, color: "var(--primary-500)" }}
                transition={{ duration: 0.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className="footer-text">
            <p>&copy; {currentYear} Prudhvi Charan. All rights reserved.</p>
            <p>
              Designed and built with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              using React.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
