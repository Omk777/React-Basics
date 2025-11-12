import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     reset: (state) => {
  state.value =0
},
   increment: (state) => {
  state.value += 1
},
decrement: (state) => {
  if (state.value > 0) {
    state.value -= 1
  }
} 
,
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
   
  },
})
export const { increment, decrement,reset } = counterSlice.actions;

export default counterSlice.reducer