<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice";
export const store = configureStore({
  reducer: {
    header: headerReducer,
=======
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
>>>>>>> 43c1f3f35b098bbc99feb513384fec570abbfe56
  },
});
