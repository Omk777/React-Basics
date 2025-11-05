import React from 'react'



export const Contact = () => {

    const contacts=[
        {
            id:1,
            name:"om",
            con:4556667777,
        },
        {
            id:2,
            name:"Prateek",
            con:9999000777,
        }
    ]
  return (
    <div>
       <h1>
         {
            contacts.map((c,index)=>{
                return <li key={index}>
                    {c.name} {c.con}
                </li>
            })
        }
       </h1>
    </div>
  )
}
