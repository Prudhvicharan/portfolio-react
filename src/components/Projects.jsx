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
    githubLink: null,
    liveLink: null,
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
    githubLink: "https://github.com/Prudhvicharan/launchmasters",
    liveLink: "https://launchmasters.vercel.app/login",
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
    githubLink: "https://github.com/Prudhvicharan/career-axis",
    liveLink: "https://prudhvicharan.github.io/Career-Axis/",
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
        {(project.githubLink || project.liveLink) && (
          <div className="project-links-overlay">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-overlay github-link"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-overlay live-link"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6v2h5.59L6.76 16.83l1.41 1.41L17 9.41V15h2V6h-9z" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
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
