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
} from "react-icons/si";
import "./Skills.css";
import SectionTitle from "./common/SectionTitle";

const skillsData = {
  frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Sass", icon: <FaSass />, color: "#CC6699" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
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
    { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    { name: "Jest", icon: <SiJest />, color: "#C21325" },
    { name: "Cypress", icon: <SiCypress />, color: "#17202C" },
    { name: "Storybook", icon: <SiStorybook />, color: "#FF4785" },
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
        <SectionTitle>My Technical Skills</SectionTitle>
        <p className="skills-intro">
          I have experience with a wide range of technologies in the web
          development ecosystem. Here are some of my key skills.
        </p>
        <div className="skills-layout">
          <SkillCategory title="Frontend" skills={skillsData.frontend} />
          <SkillCategory title="Backend" skills={skillsData.backend} />
          <SkillCategory
            title="Tools & Technologies"
            skills={skillsData.tools}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
