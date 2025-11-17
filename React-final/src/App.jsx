import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import CountryDetails from './pages/CountryDetails'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import Error from './pages/Error'


const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'country',
        element: <Country />
      },
       {
        path: 'country/:id',
        element: <CountryDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
 
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
