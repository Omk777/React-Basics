import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

function Error() {
    const error=useRouteError()
  return (
    <div>
        <h1>Error 404! unexpected url
            {
                error&& error.data
            }
        </h1>
        <NavLink to='/'>
        <button>
            Go back to home
        </button>
        </NavLink>
    </div>
  )
}

export default Error