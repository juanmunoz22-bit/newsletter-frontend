import React, { createContext, useState } from "react";

export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [value, setValue] = useState({})
  return <FormContext.Provider
    value={{
      value,
      setValue
    }}
  >
    {children}
  </FormContext.Provider>
}