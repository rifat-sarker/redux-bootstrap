import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//handle ts type error for organizing the code
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//handle ts type error for organizing the code in store.ts file
