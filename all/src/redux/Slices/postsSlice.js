import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload) // ✅ mutate draft
    },
    editPost: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload.id) // ✅ use state.posts
      if (post) {
        post.title = action.payload.title // ✅ mutate draft
        post.body = action.payload.body
      }
    },
    deletePost: (state, action) => {
      const index = state.posts.findIndex(p => p.id === action.payload) // ✅ use state.posts
      if (index !== -1) {
        state.posts.splice(index, 1) // ✅ mutate draft
      }
    }
  }
})

export const { addPost, editPost, deletePost } = postsSlice.actions
export default postsSlice.reducer
