import { useRef } from 'react';

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import EmailEditor from 'react-email-editor';

import { useFormState } from "../../../hooks/useFormState";
import Form from '../../../components/Form';
import FormButton from '../../../components/FormButton';
import Button from '../../../components/Button';

const EmailBuilder = () => {

  const emailEditorRef = useRef(null);
  const [state, setState] = useFormState();

  const navigate = useNavigate();

  const {
    handleSubmit,
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    return new Promise((resolve, reject) => {
      unlayer?.exportHtml((data) => {
        const { html } = data;
        resolve(html);
      });
    });
  };

  const onSubmit = async () => {
    const html = await exportHtml();
    setState({ ...state, html: html });
    navigate("/confirm");
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='flex flex-col items-center'>
          <div className="flex flex-col mt-6 items-center justify-center">
            <h1 className="text-4xl font-bold text-center">
              Newsletter Creator
            </h1>
            <EmailEditor
              ref={emailEditorRef}
            />
          </div>
          <div className='flex w-72 justify-between'>
            <Button
              children="Back"
              className="inline-block rounded border bg-teal-600 border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none active:text-teal-500 mt-6 cursor-pointer"
              onClick={() => navigate('/')}
            />
            <FormButton
              children="Next"
              className="inline-block rounded border bg-teal-600 border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none active:text-teal-500 mt-6"
            />
          </div>
        </fieldset>
      </Form>
    </>
  )
}

export default EmailBuilder;