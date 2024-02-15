import { useRoutes, BrowserRouter } from 'react-router-dom'

import Info from '../pages/Steps/Info'
import EmailBuilder from '../pages/Steps/EmailBuilder'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { FormProvider } from '../context/Form'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Info />, },
    { path: '/builder', element: <EmailBuilder />,}
  ])
  return routes
}

function App() {

  return (
    <FormProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </FormProvider>
  )
}

export default App