import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const openCartSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    open(state) {
      return {
        ...state,
        isOpen: true,
      };
    },
    close(state) {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { open, close } = openCartSlice.actions;

export default openCartSlice.reducer;
