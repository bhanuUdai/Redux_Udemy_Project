import { createSlice } from "@reduxjs/toolkit";

const counterState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggleCount(state) {
      state.showCounter = !state.showCounter;
    },
    incrementby2(state) {
      state.count = state.count + 2;
    },
    deccrementby2(state) {
      state.count = state.count - 3;
    },
    incrementby5(state) {
      state.count = state.count + 5;
    },
    deccrementby5(state) {
      state.count = state.count - 5;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
