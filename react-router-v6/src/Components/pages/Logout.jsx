import React from 'react'
import {useLocation} from "react-router-dom"
const Logout = () => {
    let loc=useLocation()
    const data = loc.state;
  return (
    <div>
        <h1>Logout Page</h1>
      <h2>Goodbye {data?.name || 'Guest'} 👋</h2>
    </div>
  )
}

export default Logout