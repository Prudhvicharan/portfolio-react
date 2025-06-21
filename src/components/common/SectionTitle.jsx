import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ icon, children, className = "" }) => (
  <h2 className={`section-title ${className}`}>
    {icon && <span className="section-icon">{icon}</span>} {children}
  </h2>
);

SectionTitle.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
