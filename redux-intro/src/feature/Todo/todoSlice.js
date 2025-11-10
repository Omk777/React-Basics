import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    { id: 1, text: 'Hello World' }
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
     console.log("Dispatched addTodo with:", action.payload)
        
      const todo = {
        id: nanoid(),
        text: action.payload.text, // ✅ 'text' comes from object
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
      updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
})

export const { addTodo, removeTodo,updateTodo } = todoSlice.actions
export default todoSlice.reducer
