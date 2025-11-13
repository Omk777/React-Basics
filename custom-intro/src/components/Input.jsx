/* eslint-disable no-unused-vars */

import React,{useState} from 'react'
import useInput from '../hooks/useInput'


function Input() {
 


   const{firstName,bindFirst,resetFirst}= useInput('')
   const {lastName,bindLast,resetLast}=useInput('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirst()
        resetLast()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <div className="form-group-item">
                    <label >First Name</label>
                    <input type="text" {...bindFirst} className='form-control'/>
                
                    <label >Last Name</label>
                    <input type="text" {...bindLast} className='form-control'/>
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Input