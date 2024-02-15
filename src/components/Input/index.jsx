import React from "react"

const Input = React.forwardRef(({ children, inputId }, ref) => {
  return (
    <div >
      <label htmlFor={inputId} className="block text-xs font-medium text-gray-700"> {children} </label>
      <input
        ref={ref}
        type="text"
        id={inputId}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
      />
    </div >
  )
});

export default Input;
