import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {},
});

//handle ts type error for organizing the code
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//handle ts type error for organizing the code in store.ts file
