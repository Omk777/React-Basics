import { useState } from "react"
import React from 'react'

function Counter2() {
    const [count,setCount]=useState(0)

    const increment =()=>{
        setCount(prev=> prev+1)
    }
     const decrement =()=>{
        if(count>0){
            setCount(prev=> prev-1)
        }
    }
    const reset=()=>{
        setCount(0)
    }

  return (
    <div>
        <h2>Count :{count}</h2>
        <button onClick={increment}>increment </button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset </button>
    </div>
  )
}

export default Counter2