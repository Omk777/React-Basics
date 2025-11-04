 
 
import { useState } from 'react'

import './App.css'

function App() {
  const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
  const [show,setShow]=useState('')


  const getName=(e)=>{
    if(e.target.name=='firstname'){
      console.log(e.target.value);
    setFname(e.target.value)
    }
    if(e.target.name=='lastname'){
      setLname(e.target.value)
    }
    
    
  }

  const handle=(e)=>{
    e.preventDefault();
    setShow(`${fname} ${lname}`)
  }

 

  return (
   <>
      <form onSubmit={handle}>
        <h1>{show}</h1>
        <label>Enter first name</label>
        <input type="text" name='firstname' onChange={getName} value={fname}/>
       
        <label>Enter last name</label>
        <input type="text" name='lastname' onChange={getName} value={lname}/>
        <button  type='submit'>Submit</button>
      </form>
   </>
  )
}

export default App
