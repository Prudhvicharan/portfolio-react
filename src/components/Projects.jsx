import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./common/SectionTitle";
import "./Projects.css";
// NOTE: Please add placeholder images to src/assets/ with these names
// or update the import paths to your actual project images.
import placeholder1 from "../assets/project-1.png";
import placeholder2 from "../assets/project-2.png";
import placeholder3 from "../assets/project-3.png";

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
    title: "LaunchMasters",
    subtitle: "College application management platform for students.",
    description:
      "Comprehensive web application helping students manage their college journey from discovery to decision. Features college search across 7,000+ US institutions, deadline tracking, application progress monitoring, and smart reminders with analytics dashboard.",
    stats: [
      { value: "7,000+", label: "College Database" },
      { value: "Real-time", label: "API Integration" },
      { value: "Smart", label: "Notifications" },
    ],
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    image: placeholder3,
    title: "Career-Axis",
    subtitle: "Career guidance and counseling platform.",
    description:
      "Interactive career guidance system built with React, providing personalized career recommendations, skills assessment, and educational pathway suggestions to help users make informed professional decisions.",
    stats: [
      { value: "Interactive", label: "Assessments" },
      { value: "Personalized", label: "Recommendations" },
      { value: "React", label: "Framework" },
    ],
    technologies: ["React", "JavaScript", "Career Analytics", "UI/UX"],
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
