import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlay, FaPause, FaArrowDown, FaDownload } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTypescript,
} from "react-icons/si";
import profilePic from "../assets/profile-pic.png";
import "./Home.css";

const techStack = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
];

const getOrbitRadius = () => {
  if (window.innerWidth > 1200) return 180;
  if (window.innerWidth > 900) return 130;
  if (window.innerWidth > 600) return 90;
  return 60;
};

const TechOrbit = ({ isOrbiting }) => {
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(getOrbitRadius());

  useEffect(() => {
    const handleResize = () => setRadius(getOrbitRadius());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (isOrbiting) {
        setAngle((prev) => prev + 0.008);
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    if (isOrbiting) {
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isOrbiting]);

  return (
    <div className="tech-orbit">
      <div className="tech-orbit-dotted"></div>
      <div
        className={`profile-pic-container ${isOrbiting ? "orbit-active" : ""}`}
        style={{ zIndex: 2 }}
      >
        <img
          src={profilePic}
          alt="Prudhvi Charan"
          className="profile-pic"
        />
        <div className="orbit-pulse"></div>
        <div className="orbit-instruction">
          {isOrbiting ? <FaPause /> : <FaPlay />}
        </div>
      </div>
      {/* Orbiting icons */}
      <div
        className="orbit-icons-wrapper"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
          zIndex: 3,
          transform: `translate(-50%, -50%) rotate(${angle}rad)`
        }}
      >
        {techStack.map((tech, i) => {
          const iconAngle = (i / techStack.length) * 2 * Math.PI;
          const x = Math.cos(iconAngle) * radius;
          const y = Math.sin(iconAngle) * radius;
          return (
            <div
              key={tech.name}
              className="tech-icon-wrapper"
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="tech-icon" data-tooltip={tech.name}>
                {tech.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Home = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const [isOrbiting, setIsOrbiting] = useState(true);

  const handleOrbitToggle = () => setIsOrbiting((prev) => !prev);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="home-section" id="home">
      <div className="container">
        <motion.div
          className="home-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="home-left" variants={itemVariants}>
            <p className="intro-text">Hello, I'm</p>
            <h1 className="name-title">
              <span>Prudhvi</span>
              <span>Charan</span>
            </h1>
            <h2 className="subtitle">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="description">
              I craft exceptional digital experiences by combining cutting-edge
              technology with intuitive design. Specializing in modern web
              applications that are scalable, performant, and user-centric.
            </p>
            {/* <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div> */}
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work <FaArrowDown />
              </a>
              <a href="/resume.pdf" download className="btn btn-secondary">
                Download CV <FaDownload />
              </a>
            </div>
          </motion.div>

          <motion.div className="home-right" variants={itemVariants}>
            <div onClick={handleOrbitToggle} style={{ cursor: "pointer" }}>
              <TechOrbit isOrbiting={isOrbiting} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
