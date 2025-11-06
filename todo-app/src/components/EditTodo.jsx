
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTodo = () => {
     const {id}=useParams();
    const navigate=useNavigate();
    const [text,setText]=useState("");
    

    useEffect(() => {
    const todos = (JSON.parse(localStorage.getItem("todos")) || []).filter(t => t);
    const todo = todos.find((t) => t.id === Number(id));
    if (todo) setText(todo.text);
  }, [id]);

 const handleSubmit = (e) => {
    e.preventDefault();
    const todos = (JSON.parse(localStorage.getItem("todos")) || []).filter(t => t);
    
    const updatedTodos = todos.map((t) =>
      t.id === Number(id) ? { ...t, text } : t
    );

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
   
     toast.success('✅ Todo updated successfully!', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
    
    setTimeout(()=>{
        navigate('/')
    },1500)
  };
  return (
    <div className='card p-4 shadow'>
        <h3>Edit Todo</h3>
        
        <form onSubmit={handleSubmit}>
            <input type="text" className='form-control my-3' value={text} onChange={(e)=>setText(e.target.value)}  required/>
            <button className='btn btn-success w-100'>Update</button>
        </form>
        <ToastContainer/>

    </div>
  )
}

export default EditTodo