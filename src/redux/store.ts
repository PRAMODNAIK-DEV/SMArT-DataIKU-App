import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { api } from "./services/api"; // RTK Query API Slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer, // RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add RTK Query middleware
});

// Infer types for RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
