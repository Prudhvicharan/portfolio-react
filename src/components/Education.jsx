import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/ThemeContext";
import { FaGraduationCap } from "react-icons/fa";

// Dummy education data
const educationData = [
  {
    institution: "Stanford University",
    degree: "Master of Computer Science",
    gpa: 3.8,
    location: "Stanford, CA",
    startDate: "Aug 2017",
    endDate: "May 2019",
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Engineering",
    gpa: 3.6,
    location: "Berkeley, CA",
    startDate: "Aug 2013",
    endDate: "May 2017",
  },
];

const Education = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <div className={`education-container ${darkTheme ? "dark" : ""}`}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <FaGraduationCap className="section-icon" /> Education
      </motion.h2>

      <motion.div
        ref={ref}
        className="education-timeline"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            variants={itemVariants}
          >
            <div className="education-card-content">
              <div className="education-icon">
                <div className="education-line"></div>
                <div className="education-circle">
                  <FaGraduationCap />
                </div>
              </div>
              <div className="education-details">
                <h3>{edu.institution}</h3>
                <h4>{edu.degree}</h4>
                <p className="education-date">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="education-location">{edu.location}</p>
                {edu.gpa && <p className="education-gpa">GPA: {edu.gpa}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
