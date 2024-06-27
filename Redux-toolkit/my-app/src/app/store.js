import { configureStore } from "@reduxjs/toolkit";
import simpsonReducer from "../features/simpson/simpsonSlice";

export const store = configureStore({
  reducer: {
    simpson: simpsonReducer,
  },
});
