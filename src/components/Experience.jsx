import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/ThemeContext";
import { BsBriefcase } from "react-icons/bs";
import "./Experience.css";
// Dummy data for work experience
const workExperiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    date: "Jan 2022 - Present",
    location: "San Francisco, CA",
    details: [
      "Led a team of 5 developers in building a customer management platform",
      "Implemented microservices architecture using Node.js and React",
      "Reduced API response time by 40% through optimized database queries",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    date: "Mar 2020 - Dec 2021",
    location: "Austin, TX",
    details: [
      "Developed and maintained multiple web applications using React and Express.js",
      "Integrated third-party APIs for payment processing and data analytics",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Collaborated with UX designers to improve user experience",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    date: "Jun 2019 - Feb 2020",
    location: "Remote",
    details: [
      "Built responsive web interfaces using HTML, CSS, and JavaScript",
      "Assisted in database design and implementation using MongoDB",
      "Participated in daily stand-ups and sprint planning",
      "Developed RESTful APIs using Express.js",
    ],
  },
];

const Experience = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
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
    <div className={`experience-container ${darkTheme ? "dark" : ""}`}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <BsBriefcase className="section-icon" /> Work Experience
      </motion.h2>

      <motion.div
        ref={ref}
        className="experience-timeline"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {workExperiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            variants={itemVariants}
          >
            <div className="experience-header">
              <div className="title-company">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
              </div>
              <div className="date-location">
                <p>{exp.date}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="experience-details">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
