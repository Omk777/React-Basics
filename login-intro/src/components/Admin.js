import React from 'react'
import { Link } from 'react-router-dom'
import User from './User'

function Admin() {
  return (
    <section>
        <h1>
            Admin Page
        </h1>
        <br/>
        <User/>
        <br/>
        <p>You must have been assigned a Admin role</p>
        <div className='flex-grow'>
            <Link to='/'>Home</Link>
        </div>
    </section>
  )
}

export default Admin