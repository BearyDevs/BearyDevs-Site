import { configureStore } from "@reduxjs/toolkit";
import minimized from "./slices/minimized";
import { ENV } from "@/app/libs/constants";

export const store = configureStore({
  reducer: {
    minimized,
  },
  devTools: ENV.NODE_ENV === "development",
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
