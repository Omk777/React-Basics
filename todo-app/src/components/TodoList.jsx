
import React, { useState,useEffect } from 'react'
import {Link} from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {

    const [todos,setTodos]=useState([]);

    useEffect(()=>{
        const stored=JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(stored.filter(t => t !== null));
    },[])

    const deleteTodo=(id)=>{

        const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (!confirmDelete) return; 
        const updated =todos.filter((t)=>t.id!==id);
        setTodos(updated)
        localStorage.setItem("todos",JSON.stringify(updated))
         toast.error("❌ Todo deleted successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    }
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-6 offset-3">
                <div className="card">
                    <div className="card-body">
                          <h2 className='text-center mb-3'>Your Todos</h2>
        {
            todos.length===0?(
                <p className='text-center text-muted'>No todos yet! Add one above</p>
            ):(
                <ul className='list-group'>
                    {
                        todos.map((todo)=>{
                            return (
                                <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                                <span>{todo.text}</span>
                                <div>
                                    <Link to={`/edit/${todo.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                                    <button className='btn btn-danger btn-sm' onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            )
        }
        <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TodoList