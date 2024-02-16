import React, { createContext, useState } from "react";

export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const value = useState({})
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}