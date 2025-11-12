
import React from 'react'

import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer } from 'react-toastify'
function App() {
  

  return (
    <>
     <Provider store={store}>
 <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

       
      </Routes>
      
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={1000} />

     </Provider>

    </>
  )
}

export default App
