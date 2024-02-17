import { useEffect } from "react"

import Table from "../../components/Table"

const Sender = () => {

  return (
    <div className="flex flex-col mt-6 items-center justify-center">
      <h1 className="text-4xl font-bold text-center">
        Email Sender
      </h1>
      <div className="mt-10">
        <Table />
      </div>
    </div>
  )
}

export default Sender