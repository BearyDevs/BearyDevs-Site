import { configureStore } from "@reduxjs/toolkit";
import minimized from "./slices/minimized";

export const store = configureStore({
  reducer: {
    minimized,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
