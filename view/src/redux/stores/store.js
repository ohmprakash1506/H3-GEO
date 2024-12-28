import { configureStore } from "@reduxjs/toolkit";
import { h3Slice } from "../features/h3Slice";

export const store = configureStore({
  reducer: {
    [h3Slice.reducerPath]: h3Slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(h3Slice.middleware), 
});
