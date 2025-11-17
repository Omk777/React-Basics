import React from 'react'
import Footer from '../UI/Footer'
import Headers from '../UI/Headers'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <Headers/>
    <Outlet/>

    <Footer/>
    
    </>
  )
}

export default AppLayout