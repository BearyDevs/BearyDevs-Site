import { configureStore } from "@reduxjs/toolkit";
import minimized from "./slices/minimized";
import { ENV } from "@/app/libs/constants";
import maximized from "./slices/maximized";

export const store = configureStore({
  reducer: {
    minimized,
    maximized
  },
  devTools: ENV.NODE_ENV === "development",
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
