import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  change:false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      return {
        ...state,
        items: action.payload.items,
        totalQuantity: action.payload.totalQuantity,
      };
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: newItem.id,
              price: newItem.price,
              quantity: 1,
              totalPrice: newItem.price,
              title: newItem.title,
              description: newItem.description,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
          change:true,
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: item.totalPrice + item.price,
                }
              : item
          ),
          totalQuantity: state.totalQuantity + 1,
          change:true,
        };
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== itemId),
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: item.totalPrice - item.price,
                }
              : item
          ),
          totalQuantity: state.totalQuantity - 1,
        };
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart,replaceCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
