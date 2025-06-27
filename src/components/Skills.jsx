import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
  FaTools,
  FaAccessibleIcon,
  FaKeyboard,
  FaEye,
  FaPalette,
  FaChartLine,
  FaRocket,
  FaBug,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiApollographql,
  SiRedux,
  SiWebpack,
  SiVite,
  SiJest,
  SiCypress,
  SiStorybook,
  SiNetlify,
  SiVercel,
  SiHeroku,
  SiTailwindcss,
  SiMui,
  SiAngular,
  SiTestinglibrary,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import "./Skills.css";
import SectionTitle from "./common/SectionTitle";

const skillsData = {
  frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Angular 9+", icon: <SiAngular />, color: "#DD0031" },
    { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Sass/SCSS", icon: <FaSass />, color: "#CC6699" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  ],
  testing: [
    { name: "Jasmine", icon: <FaCode />, color: "#8A4182" },
    { name: "Karma", icon: <FaBug />, color: "#56C5A8" },
    { name: "Jest", icon: <SiJest />, color: "#C21325" },
    {
      name: "React Testing Library",
      icon: <SiTestinglibrary />,
      color: "#E33332",
    },
    { name: "Cypress", icon: <SiCypress />, color: "#17202C" },
    { name: "Unit Testing", icon: <FaTools />, color: "#4CAF50" },
    { name: "E2E Testing", icon: <FaRocket />, color: "#FF6B35" },
  ],
  performance: [
    { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    { name: "Lighthouse Audits", icon: <FaRocket />, color: "#F44B21" },
    { name: "Bundle Analysis", icon: <FaChartLine />, color: "#8B5CF6" },
    { name: "Code Splitting", icon: <FaCode />, color: "#61DAFB" },
    { name: "Performance Monitoring", icon: <FaEye />, color: "#FF6B35" },
    { name: "CAST Tools", icon: <FaTools />, color: "#4CAF50" },
  ],
  accessibility: [
    { name: "WCAG 2.1 AA", icon: <FaAccessibleIcon />, color: "#0066CC" },
    { name: "ARIA Labels", icon: <FaCode />, color: "#E34F26" },
    { name: "Screen Reader Testing", icon: <FaEye />, color: "#8B5CF6" },
    { name: "Keyboard Navigation", icon: <FaKeyboard />, color: "#4B5563" },
    { name: "Color Contrast", icon: <FaPalette />, color: "#F59E0B" },
    { name: "Semantic HTML", icon: <FaHtml5 />, color: "#E34F26" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
    { name: "Apollo", icon: <SiApollographql />, color: "#311C87" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  ],
  tools: [
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Storybook", icon: <SiStorybook />, color: "#FF4785" },
    { name: "ESLint", icon: <SiEslint />, color: "#4B32C3" },
    { name: "Prettier", icon: <SiPrettier />, color: "#F7B93E" },
    { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
    { name: "Vercel", icon: <SiVercel />, color: "#000000" },
    { name: "Heroku", icon: <SiHeroku />, color: "#430098" },
  ],
};

const SkillCategory = ({ title, skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="skill-category"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h3 className="skill-category-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05, boxShadow: "var(--shadow-xl)" }}
            style={{ "--skill-color": skill.color }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`skills-container ${darkTheme ? "dark" : ""}`} id="skills">
      <div className="container">
        <SectionTitle>Technical Expertise</SectionTitle>
        <p className="skills-intro">
          Comprehensive skill set aligned with modern web development practices,
          emphasizing performance optimization, accessibility standards, and
          robust testing methodologies.
        </p>
        <div className="skills-layout">
          <SkillCategory
            title="Frontend Development"
            skills={skillsData.frontend}
          />
          <SkillCategory
            title="Testing & Quality Assurance"
            skills={skillsData.testing}
          />
          <SkillCategory
            title="Performance & Optimization"
            skills={skillsData.performance}
          />
          <SkillCategory
            title="Web Accessibility (WCAG)"
            skills={skillsData.accessibility}
          />
          <SkillCategory
            title="Backend & Database"
            skills={skillsData.backend}
          />
          <SkillCategory title="Development Tools" skills={skillsData.tools} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
