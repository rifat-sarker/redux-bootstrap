import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

// we call it name export
//remember to export
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

/**
 * name export 
 * actions
 * remember to export
 * 
 * 
 */