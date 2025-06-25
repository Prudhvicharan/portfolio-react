import React from "react";
import { motion } from "framer-motion";
import "./SectionTitle.css";
import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  return (
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
