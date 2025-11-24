import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'tasks';

const loadTasks = () => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const persistTasks = (tasks) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // ignore storage errors
  }
};

const initialState = {
  tasks: loadTasks()
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload) // ✅ mutate draft
      persistTasks(state.tasks)
    },
    editTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload.id) // ✅ use state.tasks
      if (task) {
        task.title = action.payload.title // ✅ mutate draft
        persistTasks(state.tasks)
      }
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload) // ✅ use state.tasks
      if (index !== -1) {
        state.tasks.splice(index, 1) // ✅ mutate draft
        persistTasks(state.tasks)
      }
    }
  }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer
