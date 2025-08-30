import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: {} },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (state.items[product.id]) {
        state.items[product.id].qty += 1;
      } else {
        state.items[product.id] = { ...product, qty: 1 };
      }
    },
    increase: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].qty += 1;
    },
    decrease: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) delete state.items[id];
      }
    },
    remove: (state, action) => {
      delete state.items[action.payload];
    },
    clear: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, increase, decrease, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
