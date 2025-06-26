import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";
import "./Experience.css";

const workExperiences = [
  {
    company: "Vitrana",
    title: "Software Engineer",
    date: "June 2021 – Dec 2022",
    location: "Bangalore, KA, India",
    duration: "1.5 years",
    technologies: ["Angular 9", "TypeScript", "Jasmine", "Karma", "CAST Tools"],
    details: [
      "Developed and maintained engaging user interfaces for multiple company projects using Angular 9 and TypeScript.",
      "Leveraged Angular to create interactive web applications, delivering exceptional user experiences.",
      "Drove seamless API integrations, fostering robust interactions within the microfrontend architecture.",
      "Contributed to development through rigorous unit testing using Jasmine and Karma.",
      "Implemented performance optimization strategies using CAST tools, enhancing speed and efficiency.",
    ],
    achievements: [
      "Improved application performance by 40% through optimization strategies",
      "Reduced bug reports by 60% through comprehensive testing",
      "Led 3 major feature implementations successfully",
    ],
  },
  {
    company: "Vitrana",
    title: "Associate Software Engineer",
    date: "Dec. 2019 – May 2021",
    location: "Bangalore, KA, India",
    duration: "1.5 years",
    technologies: ["Angular", "JavaScript", "TypeScript", "HTML/CSS"],
    details: [
      "Participated in intensive training programs focused on Angular, JavaScript, and TypeScript.",
      "Successfully replicated login and home screens for the company's flagship project, HiLIT.",
      "Skillfully recreated the Capei form page with dynamic and data-intensive forms.",
      "Pioneered development of a new dashboard screen for displaying critical data.",
      "Collaborated closely with team members, providing innovative solutions.",
    ],
    achievements: [
      "Completed intensive training program with top performance",
      "Successfully delivered 4 major UI components",
      "Received recognition for innovative dashboard design",
    ],
  },
];

const ExperienceItem = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.2,
      },
    },
  };

  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="experience-item"
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="experience-marker"></div>
      <div className="experience-card">
        <div
          className="experience-header"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="experience-icon">
            <FaBriefcase />
          </div>

          <div className="experience-main-info">
            <h3 className="experience-title">{experience.title}</h3>
            <p className="experience-company">
              <FaBuilding /> {experience.company}
            </p>
            <div className="experience-meta">
              <span>
                <FaMapMarkerAlt /> {experience.location}
              </span>
              <span>
                <FaCalendarAlt /> {experience.date}
              </span>
              <span className="experience-duration">{experience.duration}</span>
            </div>
          </div>

          <div className="experience-toggle">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="experience-details"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
            >
              <div className="experience-section">
                <h4 className="experience-section-title">Technologies Used</h4>
                <div className="tech-stack">
                  {experience.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="tech-chip"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="experience-section">
                <h4 className="experience-section-title">
                  Key Responsibilities
                </h4>
                <ul className="responsibilities-list">
                  {experience.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="experience-section">
                <h4 className="experience-section-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {experience.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <SectionTitle>Professional Path</SectionTitle>
        <p className="experience-intro">
          My professional journey showcases continuous growth and impactful
          contributions in software development, with a focus on creating
          exceptional user experiences.
        </p>

        <div className="experience-timeline">
          {workExperiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
