

import {BrowserRouter,Route ,Routes,Navigate} from "react-router-dom"
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import { Contact } from "./Components/pages/Contact"
import Navbar from "./Components/Navbar"
import ErrorPage from "../../router-project/src/ErrorPage"
import Post from "./Components/pages/Post"
import Dashboard from "./Components/pages/Dashboard"
import Login from "./Components/pages/Login"
import Logout from "./Components/pages/Logout"



function App() {
  let isLogged =true
  let data={
    'st':'user not looged in'
  }
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route 
       
        path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contacts" element={<Contact/>}/>
        <Route path="*" element={<h1>404 Page not found</h1>}/>
        <Route path="/post/:category" element={<Post/>}/>
        <Route path="/post/:category/:id" element={<Post/>}/>
        <Route path="/dashboard" element={isLogged?<Dashboard/>:<Navigate to="/login" replace state={data}/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/logout" element={<Logout/>}/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
