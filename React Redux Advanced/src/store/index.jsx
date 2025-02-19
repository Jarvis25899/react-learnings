import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart.jsx';
import uiReducer from './ui.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
