import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  notification: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      return {
        ...state,
        cartIsVisible: !state.cartIsVisible,
      };
    },
    showNotification(state, action) {
      return {
        ...state,
        notification: {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        },
      };
    },
  },
});

export const { toggle, showNotification } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
