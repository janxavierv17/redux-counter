import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./reducer";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
