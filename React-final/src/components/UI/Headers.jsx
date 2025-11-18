import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


function Headers() {
        const [show,setShow]=useState(false)
    const handleButtonToggle=()=>{
        
        return setShow(!show)
    }
  return (
    <div>
        <header>
            <div className='container'>
                <div className='grid navbar-grid'>
                  <div className='Logo'>
                      <NavLink style={{ textDecoration: "none" }} to='/'>
                        <h1 >WorldAtlas</h1>
                    </NavLink>
                  </div>
                  <nav className={show ?"menu-mobile":"menu-web"}>
                    <ul>
                        <li>
                            <NavLink style={{ textDecoration: "none" }}   to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }}  to='/about'>
                               About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }}  to='/country'>
                                Country
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }}  to='/contact'>
                               Contact
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink style={{ textDecoration: "none" }}  to='/'>
                                Home
                            </NavLink>
                        </li> */}
                    </ul>
                  </nav>
                  <div className='ham-menu'>
                    <button onClick={handleButtonToggle}>
                        <GiHamburgerMenu/>
                    </button>
                  </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Headers