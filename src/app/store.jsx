// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import notificationReducer from "../features/cart/notificationSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
  },
});
