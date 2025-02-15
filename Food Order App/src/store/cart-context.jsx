import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQty: () => {},
  resetItems: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddItem(meal) {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === meal.id
      );
      if (existingItemIndex !== -1) {
        const existingItem = updatedItems[existingItemIndex];
        const updatedPresentItem = {
          ...existingItem,
          qty: existingItem.qty + 1,
        };

        updatedItems[existingItemIndex] = { ...updatedPresentItem };
      } else {
        updatedItems.push({
          id: meal.id,
          name: meal.name,
          price: +meal.price,
          qty: 1,
        });
      }

      return updatedItems;
    });
  }

  function handleUpdateItem(id, amount) {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      if (existingItemIndex !== -1) {
        const existingItem = updatedItems[existingItemIndex];
        const updatedPresentItem = {
          ...existingItem,
          qty: existingItem.qty + amount,
        };

        if (updatedPresentItem.qty === 0) {
          updatedItems.splice(existingItemIndex, 1);
          return updatedItems;
        }

        updatedItems[existingItemIndex] = { ...updatedPresentItem };
      }

      return updatedItems;
    });
  }

  const ctxValue = {
    items: cartItems,
    addItemToCart: handleAddItem,
    updateItemQty: handleUpdateItem,
    resetItems: () => setCartItems([]),
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
