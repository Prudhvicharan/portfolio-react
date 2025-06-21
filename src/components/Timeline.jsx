import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import SectionTitle from "./common/SectionTitle";
import "./Timeline.css";

const educationData = [
  {
    institution: "University of Missouri Kansas City",
    degree: "Masters in Computer Science",
    gpa: 3.8,
    location: "Kansas, MO",
    startDate: "January 2023",
    endDate: "May 2024",
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "Mtech Integrated Software Engineering",
    gpa: 8.67,
    location: "Vellore, TN, India",
    startDate: "Aug 2016",
    endDate: "May 2021",
  },
];

const workExperiences = [
  {
    company: "Vitrana",
    title: "Software Engineer",
    date: "June 2021 – Dec 2022",
    location: "Bangalore, KA, India",
    details: [
      "Developed and maintained engaging user interfaces for multiple company projects using Angular 9 and TypeScript.",
      "Leveraged Angular to create interactive web applications, delivering exceptional user experiences.",
      "Drove seamless API integrations, fostering robust interactions within the microfrontend architecture, ensuring the projects' responsiveness and cohesion.",
      "Contributed to the development process through rigorous unit testing using Jasmine and Karma, guaranteeing the reliability and stability of the applications.",
      "Implemented performance optimization strategies using CAST tools, significantly enhancing the speed and efficiency of project execution.",
    ],
  },
  {
    company: "Vitrana",
    title: "Associate Software Engineer",
    date: "Dec. 2019 – May 2021",
    location: "Bangalore, KA, India",
    details: [
      "Participated in intensive training programs focused on Angular, JavaScript, and TypeScript, enhancing my proficiency in these technologies.",
      "Successfully replicated the login and home screens for the company's flagship project, HiLIT, showcasing my ability to work with complex and critical components of the application.",
      "Skillfully recreated the Capei form page, characterized by dynamic and data-intensive forms, demonstrating my adaptability and capacity to handle diverse tasks.",
      "Pioneered the development of a new dashboard screen, responsible for displaying critical data not previously implemented by the company.",
      "Collaborated closely with team members, providing valuable insights and innovative solutions, contributing to the overall project's success.",
    ],
  },
];

const educationItems = educationData.map((edu) => ({
  type: "education",
  title: edu.degree,
  institution: edu.institution,
  date: `${edu.startDate} - ${edu.endDate}`,
  description: `Graduated with a GPA of ${edu.gpa}.`,
}));

const experienceItems = workExperiences.map((exp) => ({
  type: "experience",
  title: exp.title,
  institution: exp.company,
  date: exp.date,
  description: exp.details.join("\n\n"),
}));

const combinedTimeline = [...educationItems, ...experienceItems];

const parseEndDate = (dateString) => {
  const parts = dateString.split("–");
  const endDateStr = (parts.length > 1 ? parts[1] : parts[0]).trim();
  return new Date(endDateStr.replace("Dec.", "December"));
};

combinedTimeline.sort((a, b) => parseEndDate(b.date) - parseEndDate(a.date));

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isLeft = index % 2 === 0;

  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const Icon = item.type === "education" ? FaGraduationCap : FaBriefcase;

  return (
    <div
      ref={ref}
      className={`timeline-item-container ${isLeft ? "left" : "right"}`}
    >
      <motion.div
        className="timeline-item"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="timeline-icon-wrapper">
          <div className="timeline-icon">
            <Icon />
          </div>
        </div>
        <div className="timeline-content">
          <span className="timeline-date">
            <FaCalendarAlt /> {item.date}
          </span>
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-institution">{item.institution}</p>
          <p
            className="timeline-description"
            style={{ whiteSpace: "pre-line" }}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="timeline-section" id="timeline">
      <div className="container">
        <SectionTitle>My Journey</SectionTitle>
        <p className="timeline-intro">
          A chronological overview of my career, highlighting key milestones in
          my education and professional experience.
        </p>
        <div className="timeline-container">
          {combinedTimeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
