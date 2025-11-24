import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: []
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload) // ✅ mutate draft
    },
    editTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload.id) // ✅ use state.tasks
      if (task) {
        task.title = action.payload.title // ✅ mutate draft
      }
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload) // ✅ use state.tasks
      if (index !== -1) {
        state.tasks.splice(index, 1) // ✅ mutate draft
      }
    }
  }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer
