// In your Navbar.jsx file
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import ThemeContext from "../context/ThemeContext";
// Import an alternate set of icons from react-icons instead of heroicons
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Nav links
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        darkTheme ? "dark" : ""
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="navbar-container">
        <div className="logo">
          <span>Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              {link.name}
            </Link>
          ))}
          {/* Make the theme toggle more visible */}
          <button
            className="theme-toggle-visible"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkTheme ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button onClick={toggleMobileMenu} aria-label="Menu">
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* More visible mobile theme toggle */}
          <button
            className="theme-toggle-visible"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "0.5rem",
              background: darkTheme
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.1)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {darkTheme ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mobile-nav-link"
              activeClass="active"
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
