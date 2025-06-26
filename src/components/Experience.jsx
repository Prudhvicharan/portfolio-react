import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaCode,
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
    responsibilities: [
      "Developed and maintained engaging user interfaces for multiple company projects using Angular 9 and TypeScript.",
      "Leveraged Angular to create interactive web applications, delivering exceptional user experiences.",
      "Drove seamless API integrations, fostering robust interactions within the microfrontend architecture.",
      "Contributed to development through rigorous unit testing using Jasmine and Karma.",
      "Implemented performance optimization strategies using CAST tools, enhancing speed and efficiency.",
    ],
    achievements: [
      { text: "40% Performance Improvement", icon: "📈" },
      { text: "60% Bug Reduction", icon: "🐛" },
      { text: "3 Major Features Led", icon: "🚀" },
    ],
  },
  {
    company: "Vitrana",
    title: "Associate Software Engineer",
    date: "Dec. 2019 – May 2021",
    location: "Bangalore, KA, India",
    duration: "1.5 years",
    technologies: ["Angular", "JavaScript", "TypeScript", "HTML/CSS"],
    responsibilities: [
      "Participated in intensive training programs focused on Angular, JavaScript, and TypeScript.",
      "Successfully replicated login and home screens for the company's flagship project, HiLIT.",
      "Skillfully recreated the Capei form page with dynamic and data-intensive forms.",
      "Pioneered development of a new dashboard screen for displaying critical data.",
      "Collaborated closely with team members, providing innovative solutions.",
    ],
    achievements: [
      { text: "Top Training Performance", icon: "🎓" },
      { text: "4 UI Components Delivered", icon: "⚡" },
      { text: "Innovation Recognition", icon: "💡" },
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const [activeTab, setActiveTab] = useState("tech");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.2,
      },
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "tech":
        return (
          <div className="tech-showcase">
            {experience.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        );
      case "responsibilities":
        return (
          <div className="responsibilities-grid">
            {experience.responsibilities.map((resp, idx) => (
              <motion.div
                key={idx}
                className="responsibility-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <p>{resp}</p>
              </motion.div>
            ))}
          </div>
        );
      case "achievements":
        return (
          <div className="achievements-showcase">
            {experience.achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <p className="achievement-text">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      className="experience-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="experience-header">
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
          <span>
            <FaClock /> {experience.duration}
          </span>
        </div>
      </div>

      <div className="experience-body">
        <div className="experience-tabs">
          <button
            className={`tab-button ${activeTab === "tech" ? "active" : ""}`}
            onClick={() => setActiveTab("tech")}
          >
            <FaCode /> Tech Stack
          </button>
          <button
            className={`tab-button ${
              activeTab === "responsibilities" ? "active" : ""
            }`}
            onClick={() => setActiveTab("responsibilities")}
          >
            <FaUsers /> Responsibilities
          </button>
          <button
            className={`tab-button ${
              activeTab === "achievements" ? "active" : ""
            }`}
            onClick={() => setActiveTab("achievements")}
          >
            <FaTrophy /> Achievements
          </button>
        </div>

        <div className="tab-content">{renderTabContent()}</div>
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

        <div className="experience-grid">
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
          <h3
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "var(--space-4)",
            }}
          >
            Career Impact
          </h3>
          <div className="summary-stats">
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
