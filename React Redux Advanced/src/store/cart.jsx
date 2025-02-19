import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.items = action.payload;
    },
    setCartChanged(state, action) {
      state.changed = action.payload;
    },
    // addItem(state, action) {
    //   const { items } = state;
    //   state.changed = true;
    //   const existingItem = items.find((item) => item.id === action.payload.id);
    //   if (existingItem) {
    //     existingItem.quantity++;
    //     existingItem.totalPrice += existingItem.price;
    //   } else {
    //     items.push({
    //       ...action.payload,
    //       quantity: 1,
    //       totalPrice: action.payload.price,
    //     });
    //   }
    // },
    // removeItem(state, action) {
    //   const { items } = state;
    //   state.changed = true;
    //   const existingItem = items.find((item) => item.id === action.payload);
    //   if (existingItem.quantity === 1) {
    //     state.items = items.filter((item) => item.id !== action.payload);
    //   } else {
    //     existingItem.quantity--;
    //     existingItem.totalPrice -= existingItem.price;
    //   }
    // },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
