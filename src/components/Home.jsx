import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../context/ThemeContext";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Home.css";

// Import GSAP for more advanced animations
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import profilePic from "../assets/profile-pic.png";

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);

  // Store roles in a state or memoized value to avoid recreating on each render
  const [roles] = useState([
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Code Architect",
  ]);

  // Refs for GSAP animations
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const circleRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // Particle animation for the background
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle settings
    const particleCount = 100;
    const particles = [];

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = darkTheme
          ? `rgba(${Math.floor(Math.random() * 50 + 30)}, ${Math.floor(
              Math.random() * 80 + 100
            )}, ${Math.floor(Math.random() * 80 + 175)}, ${
              Math.random() * 0.5 + 0.3
            })`
          : `rgba(${Math.floor(Math.random() * 80 + 100)}, ${Math.floor(
              Math.random() * 80 + 100
            )}, ${Math.floor(Math.random() * 80 + 175)}, ${
              Math.random() * 0.3 + 0.1
            })`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles with lines if they're close enough
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = darkTheme
              ? `rgba(100, 149, 237, ${0.15 * (1 - distance / 100)})`
              : `rgba(100, 149, 237, ${0.05 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // GSAP animations
    let roleIndex = 0;

    // Initial animations
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })
      .to(subtitleRef.current, {
        duration: 1,
        text: roles[roleIndex],
        ease: "none",
      })
      .from(circleRef.current, {
        duration: 1.5,
        scale: 0,
        rotation: 180,
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        delay: -0.5,
      })
      .from(imageContainerRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: -1,
      });

    // Role rotation
    const roleRotation = setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      gsap.to(subtitleRef.current, {
        duration: 1.2,
        text: roles[roleIndex],
        ease: "none",
      });
    }, 3000);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(roleRotation);
    };
  }, [darkTheme, roles]); // Added roles to dependency array

  // Interactive mouse follower blob
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handleMouseMove = (e) => {
      if (!blob) return;

      const { clientX, clientY } = e;
      const scrollY = window.scrollY;

      // Only follow mouse if we're in the home section (roughly)
      if (scrollY > window.innerHeight) return;

      // Calculate position with some lag for smoother movement
      gsap.to(blob, {
        x: clientX - blob.offsetWidth / 2,
        y: clientY - blob.offsetHeight / 2 + scrollY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`home-container ${darkTheme ? "dark" : ""}`}>
      {/* Background canvas for particle effect */}
      <canvas id="particle-canvas" className="particle-canvas"></canvas>

      {/* Interactive blob that follows cursor */}
      <div className="blob" ref={blobRef}></div>

      <div className="home-content">
        <motion.div
          className="text-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 ref={titleRef}>
            Hello, I am{" "}
            <span className="highlight">Sai Prudhvi Charan Pothumsetty</span>
          </h1>

          <h2 className="typewriter" ref={subtitleRef}>
            {/* Content will be dynamically inserted by GSAP */}
            <span style={{ opacity: 0 }}>.</span>
          </h2>

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
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#contact" className="primary-button">
              Get in Touch
            </a>
            <a href="#projects" className="secondary-button">
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-button"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-button"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:email@example.com"
              aria-label="Email"
              className="social-button"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <div className="profile-container" ref={imageContainerRef}>
          <div className="profile-circle" ref={circleRef}>
            <div className="hexagon">
              <div className="hexagon-inner">
                <img src={profilePic} alt="Sai Prudhvi Charan Pothumsetty" />
              </div>
            </div>
          </div>

          {/* Tech stack orbit */}
          <div className="tech-orbit">
            <div className="tech-icon tech-icon-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
            </div>
            <div className="tech-icon tech-icon-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
              />
            </div>
            <div className="tech-icon tech-icon-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              />
            </div>
            <div className="tech-icon tech-icon-4">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              />
            </div>
            <div className="tech-icon tech-icon-5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </div>
  );
};

export default Home;
