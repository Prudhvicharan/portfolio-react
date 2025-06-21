import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/ThemeContext";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import SectionTitle from "./common/SectionTitle";
// Dummy project data
const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and product management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    highlights: [
      "Implemented secure payment processing with Stripe",
      "Built responsive UI with Material-UI",
      "Created RESTful API with Express.js",
      "Implemented JWT authentication",
    ],
    showHighlights: true,
    image: "/project1.jpg",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A productivity app that helps teams manage tasks, track progress, and collaborate efficiently.",
    technologies: ["Angular", "TypeScript", "Firebase", "RxJS", "NgRx"],
    highlights: [
      "Designed real-time updates with Firebase",
      "Built drag-and-drop interface for task management",
      "Implemented state management with NgRx",
      "Created data visualization with D3.js",
    ],
    showHighlights: true,
    image: "/project2.jpg",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Health & Fitness Tracker",
    description:
      "A mobile-responsive web app that helps users track workouts, nutrition, and health metrics.",
    technologies: [
      "React Native",
      "Express.js",
      "GraphQL",
      "MongoDB",
      "Chart.js",
    ],
    highlights: [
      "Built custom workout planner with React",
      "Implemented GraphQL API for efficient data fetching",
      "Created interactive charts for progress tracking",
      "Designed responsive layouts for all devices",
    ],
    showHighlights: true,
    image: "/project3.jpg",
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [expandedProject, setExpandedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={`projects-container ${darkTheme ? "dark" : ""}`}>
      <SectionTitle icon={<FaCode />}>Projects</SectionTitle>
      <motion.div
        ref={ref}
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${
              expandedProject === index ? "expanded" : ""
            }`}
            variants={itemVariants}
            onClick={() => toggleProject(index)}
          >
            <div className="project-image">
              <img
                src={project.image || "/project-placeholder.jpg"}
                alt={project.title}
              />
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {expandedProject === index && project.showHighlights && (
                <motion.ul
                  className="project-highlights"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
