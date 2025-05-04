import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/ThemeContext";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import "./Skills.css";
// Dummy skills data
const skillsData = [
  {
    category: "Frontend",
    icon: <FaCode />,
    items: [
      { name: "JavaScript", percentage: 90 },
      { name: "React", percentage: 85 },
      { name: "TypeScript", percentage: 80 },
      { name: "Angular", percentage: 75 },
      { name: "HTML/CSS", percentage: 95 },
      { name: "Vue.js", percentage: 70 },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer />,
    items: [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 85 },
      { name: "Python", percentage: 75 },
      { name: "Django", percentage: 70 },
      { name: "GraphQL", percentage: 75 },
      { name: "REST API", percentage: 90 },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    items: [
      { name: "MongoDB", percentage: 85 },
      { name: "MySQL", percentage: 80 },
      { name: "PostgreSQL", percentage: 75 },
      { name: "Firebase", percentage: 80 },
      { name: "Redis", percentage: 65 },
    ],
  },
  {
    category: "Tools & Others",
    icon: <FaTools />,
    items: [
      { name: "Git", percentage: 90 },
      { name: "Docker", percentage: 75 },
      { name: "AWS", percentage: 70 },
      { name: "Jest", percentage: 75 },
      { name: "CI/CD", percentage: 80 },
      { name: "Agile/Scrum", percentage: 85 },
    ],
  },
];

const Skills = () => {
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
        staggerChildren: 0.2,
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
    <div className={`skills-container ${darkTheme ? "dark" : ""}`}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <FaCode className="section-icon" /> Skills
      </motion.h2>

      <motion.div
        ref={ref}
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            variants={itemVariants}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.category}</h3>
            </div>
            <div className="skill-items">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    {skill.percentage && (
                      <span className="skill-percentage">
                        {skill.percentage}%
                      </span>
                    )}
                  </div>
                  {skill.percentage && (
                    <motion.div
                      className="skill-progress-bg"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * skillIndex }}
                    >
                      <motion.div
                        className="skill-progress-fill"
                        initial={{ width: 0 }}
                        animate={
                          inView
                            ? { width: `${skill.percentage}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 0.7,
                          delay: 0.2 + 0.1 * skillIndex,
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
