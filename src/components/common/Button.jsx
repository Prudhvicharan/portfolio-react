import React from "react";

const Button = ({ variant = "primary", children, className = "", ...rest }) => (
  <button className={`${variant}-button ${className}`} {...rest}>
    {children}
  </button>
);

export default Button;
