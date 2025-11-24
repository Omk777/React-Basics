import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './Slices/taskSlice'
import postsReducer from './Slices/postsSlice'

const STORAGE_KEYS = {
  tasks: 'tasks',
  posts: 'posts'
};

const loadFromStorage = () => {
  if (typeof window === 'undefined') return undefined;

  try {
    const tasks = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.tasks) || '[]');
    const posts = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.posts) || '[]');

    return {
      tasks: { tasks },
      posts: { posts }
    };
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    posts: postsReducer
  },
  preloadedState: loadFromStorage()
});

const persistState = (() => {
  let timeoutId;

  return (nextState) => {
    if (typeof window === 'undefined') return;

    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(nextState.tasks.tasks));
        window.localStorage.setItem(STORAGE_KEYS.posts, JSON.stringify(nextState.posts.posts));
      } catch {
        // ignore storage errors
      }
    }, 150);
  };
})();

store.subscribe(() => {
  persistState(store.getState());
});

export { store };