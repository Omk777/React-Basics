import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username,setUsername]=useState('')
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username})
        setUsername('')
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login