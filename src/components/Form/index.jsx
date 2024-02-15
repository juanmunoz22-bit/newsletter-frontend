import { useNavigate } from "react-router-dom";

const Form = ({ children, onSubmit, nextStep}) => {
  const navigate = useNavigate();

  const onSubmitCustom = (e) => {
    e.preventDefault();
    onSubmit();
    navigate(nextStep);
  };

  return (
    <form onSubmit={onSubmitCustom} noValidate>
      {children}
    </form>
  );
};

export default Form;