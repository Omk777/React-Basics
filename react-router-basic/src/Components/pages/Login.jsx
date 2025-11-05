import React from 'react'
import {useLocation} from "react-router-dom"

export const Login = () => {
    let location=useLocation()
    console.log(location);
    
  return (
    <div>
        
        <h1>Login Comp</h1>
        <h2>{location.state.st}</h2>
    </div>
  )
}

export default Login
