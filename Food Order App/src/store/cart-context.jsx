import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQty: () => {},
  resetItems: () => {},
});

function cartReducer(state, action) {
  const updatedItems = [...state.items];
  let existingItemIndex;
  if (action.payload) {
    existingItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.id
    );
  }
  switch (action.type) {
    case "ADD_ITEM":
      if (existingItemIndex !== -1) {
        const existingItem = updatedItems[existingItemIndex];
        const updatedPresentItem = {
          ...existingItem,
          qty: existingItem.qty + 1,
        };

        updatedItems[existingItemIndex] = { ...updatedPresentItem };
      } else {
        updatedItems.push({
          id: action.payload.id,
          name: action.payload.name,
          price: +action.payload.price,
          qty: 1,
        });
      }
      return { ...state, items: updatedItems };
    case "UPDATE_ITEM":
      if (existingItemIndex !== -1) {
        const existingItem = updatedItems[existingItemIndex];
        const updatedPresentItem = {
          ...existingItem,
          qty: existingItem.qty + action.payload.amount,
        };

        if (updatedPresentItem.qty === 0) {
          updatedItems.splice(existingItemIndex, 1);
          return { ...state, items: updatedItems };
        }

        updatedItems[existingItemIndex] = { ...updatedPresentItem };
      }
      return { ...state, items: updatedItems };
    case "RESET":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export default function CartContextProvider({ children }) {
  const [cartState, cartStateDispatcher] = useReducer(cartReducer, {
    items: [],
  });

  function handleAddItem(meal) {
    cartStateDispatcher({
      type: "ADD_ITEM",
      payload: meal,
    });
  }

  function handleUpdateItem(id, amount) {
    cartStateDispatcher({
      type: "UPDATE_ITEM",
      payload: {
        id,
        amount,
      },
    });
  }

  function resetItems() {
    cartStateDispatcher({
      type: "RESET",
    });
  }

  const ctxValue = {
    items: cartState.items,
    addItemToCart: handleAddItem,
    updateItemQty: handleUpdateItem,
    resetItems: resetItems,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
