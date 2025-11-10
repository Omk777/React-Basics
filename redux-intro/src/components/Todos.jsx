import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/Todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const [editingId, setEditingId] = useState(null)  // which todo is being edited
  const [editText, setEditText] = useState("")      // updated text

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const handleUpdate = (id) => {
    if (editText.trim() === "") return
    dispatch(updateTodo({ id, newText: editText }))  // send update action
    setEditingId(null)
    setEditText("")
  }

  return (
    <>
      <div className="text-xl font-semibold mb-2 text-white">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editingId === todo.id ? (
              // ✏️ Edit Mode
              <div className="flex w-full justify-between items-center gap-3">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 bg-zinc-700 text-white px-2 py-1 rounded outline-none"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  💾 Save
                </button>
                <button
                  onClick={() => {
                    setEditingId(null)
                    setEditText("")
                  }}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                >
                  ❌ Cancel
                </button>
              </div>
            ) : (
              // 📝 Normal Mode
              <>
                <div className="text-white">{todo.text}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
