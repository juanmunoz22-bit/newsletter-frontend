import { useNavigate } from "react-router-dom"

import FormButton from "../../components/FormButton";
import Form from "../../components/Form";

const Unsubscribe = () => {

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // call API to unsubscribe
    const email = window.location.search.split('=')[1];
    const response = await fetch(`http://localhost:8080/api/v1/newsletter/unsubscribe/${email}`, {
      method: 'POST',
    }).then(response => response.json());

    if (response.status === 'success') {
      navigate('/');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              We're sorry to see you go.
              <strong className="font-extrabold text-teal-700 sm:block"> Feel free to come back anytime.</strong>
            </h1>

            <FormButton children="Confirm"
              className="inline-block rounded border bg-teal-700 border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none active:text-teal-500 mt-6" />
          </div>

        </div>
      </section>
    </Form>
  );
}

export default Unsubscribe;