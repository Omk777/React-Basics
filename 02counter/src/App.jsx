/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(5)


  // let counter=5

  const addValue=()=>{
    console.log('clicked',counter);
    // eslint-disable-next-line no-const-assign
    if(counter>=0 && counter<20){
      counter=counter+1
    }else{
      return counter
    }
    setCounter(counter)
    
  }

  const removeValue=()=>{
    if(counter>0){
      counter=counter-1
    }else{
      return counter
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>React with counter</h1>
      <h2>Counter Value:{counter}</h2>
      <button 
      onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >decreased Value{counter}</button>
    </>
  )
}

export default App
