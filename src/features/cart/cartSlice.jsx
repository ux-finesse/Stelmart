import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartItems", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = {
  items: loadState(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
      saveState(state.items);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveState(state.items);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      saveState(state.items);
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
