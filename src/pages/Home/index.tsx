import Button from "../../components/Button";
import Input from "../../components/Input";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col mt-6 items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Newsletter Template Generator
        </h1>
        <div className="flex flex-col h-80 justify-center gap-10 mt-6">
          <Input children="Name" inputId="name"/>
          <Input children="Description" inputId="description"/>
          <Input children="Category" inputId="category"/>
        </div>
        <Button
          children="Next" 
          className="inline-block rounded border bg-teal-600 border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 mt-6"
        />
      </div>
    </div>
  )
};

export default Home;