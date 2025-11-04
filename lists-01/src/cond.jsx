import React from 'react'

function Cond() {
    const fruits=["Apple","Banana","Kiwi"]

    return (
       <>
       {
        fruits.length>0 && <h1>
            You have {fruits.length} fruits in your store
        </h1>
       }
       </> 
    )
}

export default Cond
