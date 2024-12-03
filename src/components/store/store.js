import { configureStore } from "@reduxjs/toolkit";

import openCartReducer from "../store/openCartSlice";

export const store = configureStore({
  reducer: {
    openCart: openCartReducer,
  },
});
