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
    // achievements: [
    //   "Dean's List",
    //   "Research Assistant",
    //   "Graduate Teaching Assistant",
    // ],
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
    // achievements: ["Merit Scholarship", "Technical Lead", "Best Project Award"],
  },
];

const EducationItem = ({ education, index }) => {
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

  return (
    <motion.div
      ref={ref}
      className="education-item"
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="education-marker"></div>
      <div className="education-card">
        <div className="education-header">
          <div className="education-icon">
            <FaGraduationCap />
          </div>
          <div className="education-content">
            <h3 className="education-title">{education.degree}</h3>
            <p className="education-institution">
              <FaUniversity /> {education.institution}
            </p>
          </div>
        </div>

        <div className="education-meta">
          <span>
            <FaMapMarkerAlt /> {education.location}
          </span>
          <span>
            <FaCalendarAlt /> {education.startDate} - {education.endDate}
          </span>
          <span className="education-gpa">
            <FaStar /> GPA: {education.gpa}
          </span>
        </div>

        <div className="education-highlights">
          <div className="highlight-group">
            <h4>Key Highlights</h4>
            <ul className="highlight-list">
              {education.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ delay: index * 0.2 + 0.3 + idx * 0.1 }}
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="highlight-group">
            {/* <h4>Achievements</h4>
            <div className="achievement-tags">
              {education.achievements.map((achievement, idx) => (
                <motion.span
                  key={idx}
                  className="achievement-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: index * 0.2 + 0.5 + idx * 0.1 }}
                >
                  {achievement}
                </motion.span>
              ))}
            </div> */}
          </div>
        </div>
      </div>
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

        <div className="education-timeline">
          {educationData.map((education, index) => (
            <EducationItem key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
