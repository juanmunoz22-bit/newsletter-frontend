import React from "react";

const Button = ({ children, className }) => {
  return (
    <a
      className={className}
      href="#"
    >
      {children}
    </a>
  )
}

export default Button;