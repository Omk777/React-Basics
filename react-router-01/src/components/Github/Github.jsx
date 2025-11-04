/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export const Github = () => {
   
    const data=useLoaderData()
    // const [data,setData]= useState(null)
//      useEffect(() => {
//     fetch('https://api.github.com/users/Omkya2000')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setData(data)
//       })
//       .catch((err) => console.error(err)) // moved outside
//   }, [])

   if (!data) {
    return (
      <div className="text-center m-5 bg-gray-500 text-white p-4 text-3xl">
        Loading GitHub data...
      </div>
    )
  }
    
  return (
    <div className='text-center m-5 bg-gray-500 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img className='h-100 w-300 flex ' src={data.avatar_url} alt=""/>
    </div>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const gitLoader=async ()=>{
 const response=  await fetch('https://api.github.com/users/Omkya2000')
 return response.json()
}