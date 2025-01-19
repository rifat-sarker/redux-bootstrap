import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

//handle ts type error for organizing the code
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//handle ts type error for organizing the code in store.ts file
