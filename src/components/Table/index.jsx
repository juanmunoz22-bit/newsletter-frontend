import { useContext } from "react"

import { CampaignContext } from "../../context/Campaign"
import TableItem from "../TableItem"

const Table = () => {

  const context = useContext(CampaignContext)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Subject</th>
            <th className="px-4 py-2 flex items-center"><span>Actions</span></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {context.campaigns?.map(item => (
            <TableItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              subject={item.subject}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table