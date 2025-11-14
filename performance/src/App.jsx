
import { useState,useCallback } from 'react'

import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  const [input,setInput]=useState('')

  const updateC=useCallback(()=>setCount(count+1),[count])

  return (
    <>
      <h1>Hello from Parent:{count}</h1>
      <button onClick={()=> setCount(count+1)}>+1</button>
      <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
      <Child counter={count} updateCount={updateC}/>
    </>
  )
}

export default App

