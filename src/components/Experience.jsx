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
  FaRocket,
  FaTrophy,
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
      "Drove seamless API integrations, fostering robust interactions within the microfrontend architecture, ensuring the projects' responsiveness and cohesion.",
      "Contributed to the development process through rigorous unit testing using Jasmine and Karma, guaranteeing the reliability and stability of the applications.",
      "Implemented performance optimization strategies using CAST tools, significantly enhancing the speed and efficiency of project execution.",
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
      "Participated in intensive training programs focused on Angular, JavaScript, and TypeScript, enhancing my proficiency in these technologies.",
      "Successfully replicated the login and home screens for the company's flagship project, HiLIT, showcasing my ability to work with complex and critical components of the application.",
      "Skillfully recreated the Capei form page, characterized by dynamic and data-intensive forms, demonstrating my adaptability and capacity to handle diverse tasks.",
      "Pioneered the development of a new dashboard screen, responsible for displaying critical data not previously implemented by the company.",
      "Collaborated closely with team members, providing valuable insights and innovative solutions, contributing to the overall project's success.",
    ],
    achievements: [
      "Completed intensive training program with top performance",
      "Successfully delivered 4 major UI components",
      "Received recognition for innovative dashboard design",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
      className="experience-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="experience-timeline">
        <div className="timeline-dot"></div>
        <div className="timeline-line"></div>
      </div>

      <div className="experience-content">
        <div
          className="experience-header"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="experience-icon">
            <FaBriefcase />
          </div>

          <div className="experience-main-info">
            <h3 className="experience-title">{experience.title}</h3>
            <div className="experience-company">
              <FaBuilding /> {experience.company}
            </div>
            <div className="experience-meta">
              <span className="experience-location">
                <FaMapMarkerAlt /> {experience.location}
              </span>
              <span className="experience-date">
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
              <div className="experience-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {experience.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="experience-responsibilities">
                <h4>Key Responsibilities</h4>
                <ul>
                  {experience.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="experience-achievements">
                <h4>
                  <FaTrophy /> Key Achievements
                </h4>
                <ul>
                  {experience.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="achievement-item"
                      initial={{ opacity: 0, x: -20 }}
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

        <div className="experience-timeline-container">
          {workExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <FaRocket className="summary-icon" />
            <h3>Career Highlights</h3>
            <div className="summary-stats">
              <div className="summary-stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
