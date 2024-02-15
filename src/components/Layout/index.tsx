import React from "react"

import Sidebar from "../Sidebar"
import './styles.css'

type LayoutProps = {
  children?: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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