import React from 'react'
import {useNavigate} from "react-router-dom"
const Dashboard = () => {
    let data={
        'name':'Omkar'
    }
    let navi=useNavigate()
  return (
    <>
    <h1>Dashboard Component</h1>
    <button onClick={()=>{
        navi('/logout',{state:data})
        navi(1)
    }}>Logout</button>
    </>
  )
}

export default Dashboard