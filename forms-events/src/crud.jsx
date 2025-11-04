/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";


const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  lname:Yup.string()
        .required('Lname is required ')
        .min(4,'Lname should be atleast 4 chars')
});
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");


  const {
      register,
     
      formState: { errors,touchedFields,dirtyFields },
    } = useForm({
      resolver: yupResolver(validationSchema),
      mode:'onchange'
    });

  // ➕ Add Todo
  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    const newItem = { id: Date.now(), text: newTodo };
    setTodos([...todos, newItem]);
    setNewTodo("");
  };

  // 🗑️ Delete Todo
  const handleDelete = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  // ✏️ Start Editing
  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // 💾 Save Edited Todo
  const handleSave = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div style={{ width: "300px", margin: "40px auto", textAlign: "center" }}>
      <h2>📝 Todo App</h2>

      {/* Add New Todo */}
      <input {...register('name')}
        type="text"
        placeholder="Enter a todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
       {errors.name && (touchedFields.name || dirtyFields.name) && (
          <p className="error">{errors.name.message}</p>
        
        )}
      <button onClick={handleAdd}>Add</button>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
                <button
                  style={{ marginLeft: "5px" }}
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
