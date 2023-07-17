import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TokenProvider from '@/Context/TokenProvider'

// PAGES
import Home from '@/pages/home'
import Login from '@/components/Login/Login'
import { Spinner } from '@/components/ui'
import Predictions from '@/components/Predictions/Predictions'
import Products from '@/components/Products/Products'
import Details from '@/components/DetailsDashboard/Details'
import DetailsClientes from '@/components/ClientDetails/DetailsClient'
import DetailPrediction from '@/components/Predictions/DetailPrediction'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/predicoes',
    element: <Predictions />
  },
  {
    path: '/produtos',
    element: <Products/>
  },
  {
    path: '/details',
    element: <Details/>
  },
  {
    path: '/clientedetails',
    element: <DetailsClientes/>
  },
  {
    path: '/DetailPrediction',
    element: <DetailPrediction/>
  }
])

export default function Router() {
  
  return (
    <Suspense fallback={<Spinner />}>
      <TokenProvider>
        <RouterProvider router={router} />
      </TokenProvider>
    </Suspense>
  )
}
