import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './Slices/taskSlice'

import postsReducer from './Slices/postsSlice'

export const store =configureStore({
    reducer:{
        tasks:tasksReducer,
        posts:postsReducer
    }
})