import React from "react";

const Button = ({ children, className }: {
  children: string,
  className: React.HTMLProps<HTMLElement>['className']
}) => {
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