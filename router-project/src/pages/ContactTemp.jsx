import React from 'react'
import {useLoaderData,Form} from "react-router-dom"
const Contact = () => {
    const contact=useLoaderData()
  return (
    <div>
        <h2>{contact.name}</h2>
        <Form method="POST" action='destroy'>
            <button>Delete</button>
        </Form>
        <Form method='GET'>
            <button>Edit</button>
        </Form>
    </div>
  )
}

export default Contact