import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const socialLinks = [
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/prudhvi-charan" },
  { icon: <FaGithub />, href: "https://github.com/Prudhvicharan" },
  { icon: <FaTwitter />, href: "https://twitter.com/Prudhvicharan" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-socials">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, y: -2, color: "var(--primary-500)" }}
                transition={{ duration: 0.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className="footer-text">
            <p>&copy; {currentYear} Sagar Gundla. All rights reserved.</p>
            <p>Designed with passion and coded with React.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
