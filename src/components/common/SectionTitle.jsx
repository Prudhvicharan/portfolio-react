import React from "react";

const SectionTitle = ({ icon, children, className = "" }) => (
  <h2 className={`section-title ${className}`}>
    {icon && <span className="section-icon">{icon}</span>} {children}
  </h2>
);

export default SectionTitle;
