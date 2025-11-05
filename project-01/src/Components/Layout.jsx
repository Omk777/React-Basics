import React from 'react'
import {NavLink,Link,Outlet} from "react-router-dom"
function Layout() {
    return (
        <>
        <h1>React Router</h1>
       <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
         React Router
        </NavLink>

        {/* Toggler (hamburger) for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item flex justify-between p-2 m-2">
              <NavLink
                to="/"
                end
               style={({isActive})=>{
                return {backgroundColor:isActive?'orange':'',
                    
                }
               }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item flex justify-between p-2 m-2">
              <NavLink
                to="about"
                style={({isActive})=>{
                return {backgroundColor:isActive?'orange':''}
               }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item flex justify-between p-2 m-2">
              <NavLink
                to="contacts"
                style={({isActive})=>{
                return {backgroundColor:isActive?'orange':''}
               }}
              >
                Contacts
              </NavLink>
            </li>
             <li className="nav-item flex justify-between p-2 m-2">
              <NavLink
                to="post" end
                style={({isActive})=>{
                return {backgroundColor:isActive?'orange':''}
               }}
              >
               Posts
              </NavLink>
           </li>
          
          </ul>
        </div>
      </div>
    </nav>
                <Outlet/>
        </>
    )
}

export default Layout
