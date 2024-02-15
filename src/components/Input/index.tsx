const Input = ({children, inputId} : {children: string, inputId: string}) => {
  return (
    <div >
      <label htmlFor={inputId} className="block text-xs font-medium text-gray-700"> {children} </label>
      <input
        type="text"
        id={inputId}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
      />
    </div >
  )
}
export default Input
