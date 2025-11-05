import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx'
import ErrorPage from './ErrorPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import EditContact from './pages/EditContact.jsx'
import Contact from './pages/ContactTemp.jsx'
import { getContact,getContacts,createCon,updateContact,deleteContact } from './contacts.js'

import {createBrowserRouter,RouterProvider,  redirect} from "react-router-dom"

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    loader:getContacts,
    action:createCon,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,element:<Home/>
      },{
        path:'about',element:<About/>
      },{
        path:'contacts/:contactId',
        element:<Contact/>,
        loader:async ({params})=> getContact(params.contactId),
        action:async ({params})=>{
          await deleteContact(params.contactId);
          return redirect('/')
        },
        errorElement:<p>Contact not found</p>
      },{
        path:'contacts/:contactId/edit',
        element:<EditContact/>,
        loader:async ({params})=>getContact(params.contactId),
        action:async ({request,params})=>{
          updateContact(params.contactId,await request.formData())
        }
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
