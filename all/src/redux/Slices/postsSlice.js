import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'posts';

const loadPosts = () => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const persistPosts = (posts) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {
    // ignore storage errors
  }
};

const initialState = {
  posts: loadPosts()
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload) // ✅ mutate draft
      persistPosts(state.posts)
    },
    editPost: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload.id) // ✅ use state.posts
      if (post) {
        post.title = action.payload.title // ✅ mutate draft
        post.body = action.payload.body
        persistPosts(state.posts)
      }
    },
    deletePost: (state, action) => {
      const index = state.posts.findIndex(p => p.id === action.payload) // ✅ use state.posts
      if (index !== -1) {
        state.posts.splice(index, 1) // ✅ mutate draft
        persistPosts(state.posts)
      }
    }
  }
})

export const { addPost, editPost, deletePost } = postsSlice.actions
export default postsSlice.reducer
