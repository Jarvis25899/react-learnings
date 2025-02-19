import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  count: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.count = state.count + action.payload;
    },
    decrement(state, action) {
      state.count = state.count - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

// Without third party library, Using inbuilt redux and react-redux library
// export const INCREMENT = 'Increment Counter';
// export const DECREMENT = 'Decrement Counter';
// export const TOGGLE_COUNTER = 'Toggle Counter';

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     case TOGGLE_COUNTER:
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };
