import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";
import "./Education.css";

const educationData = [
  {
    institution: "University of Missouri Kansas City",
    degree: "Masters in Computer Science",
    gpa: 3.8,
    location: "Kansas, MO",
    startDate: "January 2023",
    endDate: "May 2024",
    highlights: [
      "Advanced Algorithms & Data Structures",
      "Machine Learning & AI",
      "Software Engineering Principles",
      "Research in Distributed Systems",
    ],
    achievements: [
      "Dean's List",
      "Research Assistant",
      "Graduate Teaching Assistant",
    ],
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "Mtech Integrated Software Engineering",
    gpa: 8.67,
    location: "Vellore, TN, India",
    startDate: "Aug 2016",
    endDate: "May 2021",
    highlights: [
      "Software Development Lifecycle",
      "Database Management Systems",
      "Web Technologies & Frameworks",
      "Project Management",
    ],
    achievements: ["Merit Scholarship", "Technical Lead", "Best Project Award"],
  },
];

const EducationCard = ({ education, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: index * 0.2 + 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="education-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="education-card-header">
        <motion.div
          className="education-icon"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FaGraduationCap />
        </motion.div>
        <div className="education-header-content">
          <h3 className="education-degree">{education.degree}</h3>
          <div className="education-meta">
            <span className="education-institution">
              <FaUniversity /> {education.institution}
            </span>
            <span className="education-location">
              <FaMapMarkerAlt /> {education.location}
            </span>
            <span className="education-date">
              <FaCalendarAlt /> {education.startDate} - {education.endDate}
            </span>
          </div>
        </div>
        <div className="education-gpa">
          <FaStar />
          <span>{education.gpa}</span>
        </div>
      </div>

      <div className="education-content">
        <div className="education-highlights">
          <h4>Key Highlights</h4>
          <ul>
            {education.highlights.map((highlight, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + 0.4 + idx * 0.1 }}
              >
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="education-achievements">
          <h4>Achievements</h4>
          <div className="achievement-tags">
            {education.achievements.map((achievement, idx) => (
              <motion.span
                key={idx}
                className="achievement-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.2 + 0.6 + idx * 0.1 }}
              >
                {achievement}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="education-card-bg"></div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <SectionTitle>Academic Journey</SectionTitle>
        <p className="education-intro">
          My educational path has been driven by passion for technology and
          continuous learning, shaping me into a well-rounded software engineer.
        </p>

        <div className="education-grid">
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>

        <motion.div
          className="education-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">Years of Study</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3.8</span>
            <span className="stat-label">GPA (Masters)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8.67</span>
            <span className="stat-label">GPA (Bachelors)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Achievements</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
