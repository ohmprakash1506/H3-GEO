import { configureStore } from "@reduxjs/toolkit";
import { h3Slice } from "../features/h3Slice";
import mapReducer from "../features/mapSlice";

export const store = configureStore({
  reducer: {
    map : mapReducer,
    [h3Slice.reducerPath]: h3Slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(h3Slice.middleware), 
});
