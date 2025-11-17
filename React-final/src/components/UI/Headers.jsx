import React from 'react'
import { NavLink } from 'react-router-dom'


function Headers() {
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
                  <nav>
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
                </div>
            </div>
        </header>
    </div>
  )
}

export default Headers