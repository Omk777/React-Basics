import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root,{loader as rootLoader} from './routes/root'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx'
import Contact from './routes/conatct.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    loader:rootLoader,
    children:[
      {
        path:'contacts/:contactId',
        element:<Contact/>
      }
    ]

  },
  // {
  //   path:'contacts/:contactId',
  //   element:<Contact/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
