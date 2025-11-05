import React from 'react'
import {useRouteError} from 'react-router-dom'

function ErrorPage() {
    const error=useRouteError();

    return (
        <>
        <h2>Oops ! Something went wrong</h2>
        <p>{error.statusText || error.message}</p>
        
        </>
    )
}

export default ErrorPage
