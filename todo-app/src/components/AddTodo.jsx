
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTodo = () => {

    const [text,setText]=useState("")
    const navigate =useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTodo={id:Date.now(),text}
        const stored=JSON.parse(localStorage.getItem("todos")) ||[]
        stored.push(newTodo);
        localStorage.setItem("todos",JSON.stringify(stored));

         toast.success(" ✅Todo Added successfully!", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
         setTimeout(() => {
      navigate('/');
    }, 1500);


    }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <h3>Add Todo</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" className='form-control my-3' placeholder='Enter todo ...' value={text} onChange={(e)=>{setText(e.target.value)}} required />
            <button className='btn btn-primary w-100'>Add</button>
        </form>
        <ToastContainer/>
            </div>
        </div>
        
    </div>
  )
}

export default AddTodo