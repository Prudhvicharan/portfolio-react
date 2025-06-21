import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./common/SectionTitle";
import "./Projects.css";
// NOTE: Please add placeholder images to src/assets/ with these names
// or update the import paths to your actual project images.
import placeholder1 from "../assets/project-placeholder-1.png";
import placeholder2 from "../assets/project-placeholder-2.png";
import placeholder3 from "../assets/project-placeholder-3.png";
import placeholder4 from "../assets/project-placeholder-4.png";

const projectsData = [
  {
    image: placeholder1,
    title: "HILIT, HICOD, CAPEI",
    subtitle: "Company projects using Angular and TypeScript frameworks.",
    description:
      "Developed and maintained user interfaces for MedDRA Dictionary and WHO Dictionary, and created an Admin MedDRA screen to read and upgrade new version MedDRA files.",
    stats: [
      { value: "Enterprise", label: "Scale" },
      { value: "100+", label: "UI Components" },
      { value: "Micro-FE", label: "Architecture" },
    ],
    technologies: ["Angular", "HTML", "SCSS", "TypeScript"],
  },
  {
    image: placeholder2,
    title: "Income Classification Using Adult Census Data",
    subtitle: "Data mining project to identify high-income individuals.",
    description:
      "Preprocessed and analyzed the Adult Census dataset. Implemented multiple classification models including Random Forest, XGBoost, and Logistic Regression to predict income levels.",
    stats: [
      { value: "85%", label: "Prediction Accuracy" },
      { value: "Flask", label: "Web Interface" },
      { value: "Top 5", label: "Factors Identified" },
    ],
    technologies: [
      "Data mining",
      "Machine learning",
      "Classification",
      "Flask",
    ],
  },
  {
    image: placeholder3,
    title: "Hospital Management System",
    subtitle: "Fully functional website for admins, doctors, and patients.",
    description:
      "Developed a comprehensive web-based system with role-based access for admins, doctors, and patients, implementing secure user authentication using JWT.",
    stats: [
      { value: "3", label: "User Roles" },
      { value: "JWT", label: "Authentication" },
      { value: "MySQL", label: "Database" },
    ],
    technologies: ["Web development", "Database", "UI Design", "JWT", "MySQL"],
  },
  {
    image: placeholder4,
    title: "Preventing Websites from SQL Injections",
    subtitle: "Developed secure login pages and e-commerce website.",
    description:
      "Created and secured login pages by implementing MD5 and SHA algorithms to hash passwords and prevent unauthorized access, and validated user inputs to prevent malicious queries.",
    stats: [
      { value: "SHA/MD5", label: "Hashing" },
      { value: "Input", label: "Validation" },
      { value: "Secure", label: "E-commerce" },
    ],
    technologies: ["Security", "Web Development", "Database Protection"],
  },
];

const FeaturedProject = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="featured-project"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="project-image-container">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-image"
        />
      </div>
      <div className="project-details-container">
        <h3 className="featured-project-title">{project.title}</h3>
        <p className="featured-project-subtitle">{project.subtitle}</p>
        <p className="featured-project-description">{project.description}</p>
        <div className="project-stats">
          {project.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label-proj">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="project-tech-list">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="container">
        <SectionTitle>My Projects</SectionTitle>
        <div className="featured-projects-list">
          {projectsData.map((project, index) => (
            <FeaturedProject key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
