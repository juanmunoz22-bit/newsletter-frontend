import { useForm } from "react-hook-form";
import { useFormState } from "../../../hooks/useFormState";

import Input from "../../../components/Input";
import FormButton from "../../../components/FormButton";
import Form from "../../../components/Form";

const Info = () => {
  const { state, setState } = useFormState();

  const {
    register,
    handleSubmit,
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const saveData = (data) => {
    setState({ ...state, ...data });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} nextStep="/builder">
      <fieldset>
        <div className="flex flex-col mt-6 items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Newsletter Template Generator
          </h1>
          <div className="flex flex-col h-80 justify-center gap-10 mt-6">
            <Input
              children="Name"
              inputId="name"
              {...register("name", { required: true })}
            />
            <Input
              children="Description"
              inputId="description"
              {...register("description", { required: true })}
            />
            <Input
              children="Category"
              inputId="category"
              {...register("category", { required: true })}
            />
          </div>
          <FormButton
            children="Next"
            className="inline-block rounded border bg-teal-600 border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none active:text-teal-500 mt-6"
          />
        </div>
      </fieldset>
    </Form>
  )
}

export default Info;