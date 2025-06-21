import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant = "primary", children, className = "", ...rest }) => (
  <button className={`${variant}-button ${className}`} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
