import React from "react"

import Sidebar from "../Sidebar"
import './styles.css'

const Layout = ({ children }) => {
  return (
    <main className="flex layout">
      <Sidebar />
      <div className="flex-1 p-3">
        {children}
      </div>
    </main>
  )
}

export default Layout;