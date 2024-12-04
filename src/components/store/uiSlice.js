import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state,) {
      return {
        ...state,
        cartIsVisible: !state.cartIsVisible,
      };
    },
    
  },
});

export const {toggle} = uiSlice.actions;

export const uiReducer =  uiSlice.reducer;
