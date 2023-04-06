import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    summary: 0,
    filtered: [],
    filterDone: false,
    hide: true,
  },
  reducers: {
    setHide: (state, action) => {
      state.hide = action.payload;
    },
    clearFilter: (state, action) => {
      state.filtered = state.cart;
      state.filterDone = false;
      console.log("cleared?", state.filtered);
    },
    filterArray: (state, action) => {
      state.filtered = action.payload;
      state.filterDone = true;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
        console.log(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.summary = state.summary - item.quantity * item.price;
      state.cart = removeItem;
    },
    incrementSummary: (state, action) => {
      state.summary += action.payload;
    },
    decrementSummary: (state, action) => {
      const item = state.cart.find((item) => item.price === action.payload);
      if (item.quantity === 1) {
        return;
      } else {
        state.summary -= action.payload;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  incrementSummary,
  decrementSummary,
  filterArray,
  clearFilter,
  setHide,
} = cartSlice.actions;
