const TableItem = (props) => {

  const { id, name, description, subject } = props;

  return (
    <tr key={id}>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{name}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{description}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{subject}</td>
      <td className="whitespace-nowrap px-4 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Send
        </a>
      </td>
      <td className="whitespace-nowrap px-4 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Edit
        </a>
      </td>
    </tr>
  )
}

export default TableItem;