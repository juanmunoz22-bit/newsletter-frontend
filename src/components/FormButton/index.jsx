import React from "react";

const FormButton = React.forwardRef(({ children, className }, ref) => {
  return (
    <button
      className={className}
      ref={ref}
    >
      {children}
    </button>
  )
});

export default FormButton;