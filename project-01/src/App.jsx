

import {BrowserRouter,Route ,Routes,Navigate} from "react-router-dom"
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import { Contact } from "./Components/pages/Contact"
import Layout from "./Components/Layout"

import PostLayout from "./Components/PostLayout"
import Post from "./Components/pages/Post"
import PostDetail from "./Components/pages/PostDetail"




function App() {
  // let isLogged =true
  // let data={
  //   'st':'user not looged in'
  // }
  return (
    <>
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Layout/>}>
        
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contacts' element={<Contact/>}/>
        <Route path='post' element={<PostLayout/>}>
          <Route path=":category" element={<PostDetail/>}/>
        </Route>
        </Route>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
