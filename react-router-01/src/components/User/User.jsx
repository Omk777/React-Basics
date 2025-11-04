import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
    <div className='bg-gray-700 text-white p-6'>User:{userid}</div>
  )
}

export default User