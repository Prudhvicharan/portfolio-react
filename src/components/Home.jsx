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
  { name: "JavaScript", icon: <SiJavascript />, speed: 1.0 },
  { name: "React", icon: <SiReact />, speed: 1.0 },
  { name: "Node.js", icon: <SiNodedotjs />, speed: 1.0 },
  { name: "TypeScript", icon: <SiTypescript />, speed: 1.0 },
  { name: "HTML5", icon: <SiHtml5 />, speed: 1.0 },
  { name: "CSS3", icon: <SiCss3 />, speed: 1.0 },
  { name: "MongoDB", icon: <SiMongodb />, speed: 1.0 },
  { name: "Express", icon: <SiExpress />, speed: 1.0 },
];

const TechIcon = ({ icon, name, angle, speed, isOrbiting }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    const animate = (time) => {
      if (isOrbiting) {
        const orbitRadius = window.innerWidth > 900 ? 140 : 110;
        const currentAngle = angle + time * 0.0003 * speed;
        setPosition({
          x: Math.cos(currentAngle) * orbitRadius,
          y: Math.sin(currentAngle) * orbitRadius,
        });
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (isOrbiting) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      setPosition({ x: 0, y: 0 });
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isOrbiting, angle, speed]);

  return (
    <motion.div
      className="tech-icon-wrapper"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="tech-icon" data-tooltip={name}>
        {icon}
      </div>
    </motion.div>
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
            <div className="stats-container">
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
            </div>
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
            <div className="tech-orbit">
              <div
                className={`profile-pic-container ${
                  isOrbiting ? "orbit-active" : ""
                }`}
                onClick={handleOrbitToggle}
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
              {techStack.map((tech, index) => (
                <TechIcon
                  key={tech.name}
                  icon={tech.icon}
                  name={tech.name}
                  angle={(index / techStack.length) * 360 * (Math.PI / 180)}
                  speed={tech.speed}
                  isOrbiting={isOrbiting}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
