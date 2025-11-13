import React from 'react'
import useFetch from '../hooks/useFetch'

const Api = () => {
    const {data,error,loading}=useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading)return <p>Laoding ...</p>
    if(error)return <p>Error:{error}</p>
    
  return (
    <div>
        <h2>User list</h2>
        <ul>
            {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default Api