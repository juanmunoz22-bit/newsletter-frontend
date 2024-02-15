import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home />, },
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
