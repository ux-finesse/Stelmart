// import { createSlice } from "@reduxjs/toolkit";

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("cartItems");
//     if (serializedState === null) {
//       return [];
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return [];
//   }
// };

// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("cartItems", serializedState);
//   } catch (err) {
//     // Ignore write errors
//   }
// };


// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: loadState(),
//   },
//   reducers: {
//     addItemToCart: (state, action) => {
//       state.items.push({ ...action.payload, quantity: 1 });
//       saveState(state.items);
//     },
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     setCartItems: (state, action) => {
//       state.items = action.payload;
//     },
//     // removeItemFromCart: (state, action) => {
//     //   state.items = state.items.filter((item) => item.id !== action.payload);
//     // },

//     clearCart: (state) => {
//       state.items = [];
//     },
//     removeItemFromCart: (state, action) => {
//       state.items = state.items.filter(
//         (products) => products.id !== action.payload
//       );
//       saveState(state.items);
//     },
//     updateItemQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const products = state.items.find((products) => products.id === id);
//       if (products) {
//         products.quantity = quantity;
//       }
//       saveState(state.products);
//     },
//   },
// });

// export const {
//   addItemToCart,
//   removeItemFromCart,
//   updateItemQuantity,
//   addItem,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;


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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadState(),
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push({ ...action.payload });
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
    clearCart: (state) => {
      state.items = [];
      saveState(state.items);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;