import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import TaskReducer from "./features/task/taskSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: TaskReducer,
  },
});

//handle ts type error for organizing the code
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//handle ts type error for organizing the code in store.ts file
