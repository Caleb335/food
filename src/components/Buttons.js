import React from "react";
import propTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: propTypes.node.isRequired,
};
