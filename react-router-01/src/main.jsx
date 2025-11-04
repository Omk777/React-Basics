import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contacts/Contacts.jsx'
import User from './components/User/User.jsx'
import { Github, gitLoader } from './components/Github/Github.jsx'


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         index: true,
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//       ,
//        {
//         path:"contacts",
//         element:<Contact/>
//       }
//     ]
    
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
       <Route path='contacts' element={<Contact />}/>
        <Route path='user/:userid' element={<User />}/>
        <Route 
        loader={gitLoader}
        path='github' element={<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
