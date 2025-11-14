import { useEffect,useRef } from "react"
import React from 'react'

function Focus() {
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default Focus