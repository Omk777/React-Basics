/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)

  const [number,setNumber]=useState(false)
  const [char ,setChar]=useState(false)
  const [pass,setPass]=useState("")

  //ref hook
 const passRef=useRef(null)

  const passwordGen=useCallback(()=>{
    let pas=''
    let str='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVWwXxYyZz'
    if(number)str+='0123456789'
    if(char)str+='!@#$%^&*()-_=+[]{};,<.>/?|'
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pas+=str.charAt(char)
    }

    setPass(pas)


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[length,number,char,setPass])

  const copyPass=useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(()=>{passwordGen()},[length,number,char,passwordGen])

 


  return (
   <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3 '>Password </h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
        value={pass}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly
        ref={passRef}
      
      />
      <button
      onClick={copyPass}
      className='outline-none bg-blue-600 text-white  px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        min={8}
        max={100}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        className='cursor-pointer'
        type="range"  />
        <label >Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{
            setNumber((prev)=> !prev)
          }}
        
        
        
        />
        <label >Numbers</label>
      </div>
      <div className='flex ite gap-x-1'>
        <input type="checkbox" 
        defaultChecked={char}
        id="charInput"
        onChange={()=>{
          setChar((prev)=> !prev)
        }}
        
        
        />
        <label >Characters</label>
      </div>
    </div>
    </div>
   
   </>
  )
}

export default App
