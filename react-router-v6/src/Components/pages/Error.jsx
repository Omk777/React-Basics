import React from 'react'
import useRouteError from "react-router-dom"
export const Error = () => {
    const error=useRouteError();
  return (
    <div>
        <h1>Oops no such page !</h1>
        <p>{error.statusText || error.message}</p>
    </div>
  )
}
