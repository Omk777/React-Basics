import React from 'react'
import{useLoaderData,useNavigate} from "react-router-dom"

const EditContact = () => {
    const contact=useLoaderData()
    const navigate =useNavigate()

  return (
    <div>
        <h2>Edit Contact</h2>
        <Form method='post'>
            <input name='name' defaultValue={contact.name} />
            <button type='submit'>save</button>
            <button type='button' onClick={()=>navigate(-1)}>cancel</button>
        </Form>
    </div>
  )
}

export default EditContact