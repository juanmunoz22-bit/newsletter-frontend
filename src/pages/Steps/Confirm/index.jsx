import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Input from "../../../components/Input";
import Form from '../../../components/Form';
import FormButton from '../../../components/FormButton';
import Button from '../../../components/Button';
import { useFormState } from "../../../hooks/useFormState";

import { ReactMultiEmail } from "react-multi-email";
import 'react-multi-email/dist/style.css';

const Confirm = () => {

  const [state, setState] = useFormState();

  const [emails, setEmails] = useState([])
  const [focused, setFocused] = useState(false)

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm({ defaultValues: state });

  const submitData = async (data) => {
    setState({ ...state, ...data });
    // call API to save data

    const response = await fetch('http://localhost:8080/api/v1/newsletter/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);

  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <fieldset>
        <div className="flex flex-col mt-6 items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Newsletter Creator
          </h1>
          <div className="flex flex-col h-80 justify-center gap-10 mt-6 w-96">
            <Input
              children="Email Subject"
              inputId="subject"
              {...register("subject", { required: true })}
            />
            <ReactMultiEmail
              placeholder="Add emails.."
              emails={emails}
              onChange={(_emails) => {
                setEmails(_emails);
                setValue("emails", _emails);
              }}
              autoFocus={true}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              getLabel={(
                email,
                index,
                removeEmail
              ) => {
                return (
                  <div data-tag key={index}>
                    {email}
                    <span data-tag-handle onClick={() => removeEmail(index)}>
                      ×
                    </span>
                  </div>
                );
              }}
            />

          </div>
          <div className='flex w-80 justify-between'>
            <Button
              children="Back"
              className="inline-block rounded border bg-teal-600 border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none active:text-teal-500 mt-6 cursor-pointer"
              onClick={() => navigate('/builder')}
            />
            <FormButton
              children="Save"
              className="inline-block rounded border bg-teal-600 border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none active:text-teal-500 mt-6"
            />
          </div>
        </div>
      </fieldset>
    </Form>
  )
}

export default Confirm