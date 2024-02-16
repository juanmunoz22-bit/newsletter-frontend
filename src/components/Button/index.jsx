import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <a
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Button;