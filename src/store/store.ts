import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import appReducer from "./app/appSlice";

export const store = configureStore({
  reducer: { app: appReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
