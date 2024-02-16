import { useContext } from "react";

import { FormContext } from "../context/Form/index.jsx";

export const useFormState = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
}