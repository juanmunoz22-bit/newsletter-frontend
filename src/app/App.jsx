import { useRoutes, BrowserRouter } from 'react-router-dom'

import Info from '../pages/Steps/Info'
import EmailBuilder from '../pages/Steps/EmailBuilder'
import Confirm from '../pages/Steps/Confirm'
import Sender from '../pages/Sender'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { FormProvider } from '../context/Form'
import { CampaignProvider } from '../context/Campaign'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Info />, },
    { path: '/builder', element: <EmailBuilder />, },
    { path: '/confirm', element: <Confirm />, },
    { path: '/sender', element: <Sender />, },
  ])
  return routes
}

function App() {

  return (
    <CampaignProvider>
      <FormProvider>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </FormProvider>
    </CampaignProvider>
  )
}

export default App
