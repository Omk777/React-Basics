import React from 'react'
import { useState } from 'react'
import useNewDoctitle from '../hooks/NewDoctitle'
function Doctitle() {
    const [count,setCount]=useState(0)

  useNewDoctitle(count)
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>Count {count}</button> 

    </div>
  )
}

export default Doctitle