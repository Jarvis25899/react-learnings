import { cartActions } from './cart';
import { uiActions } from './ui';

export const updateCartData = (item, cartData, action) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Updating...',
        message: 'Updating cart data!',
      })
    );

    let updatedItems = [...cartData.items];
    const existingItem = updatedItems.find((i) => i.id === item.id);
    if (action === 'ADD') {
      if (existingItem) {
        const updatedExistingItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          totalPrice: existingItem.totalPrice + existingItem.price,
        };
        const index = updatedItems.findIndex((i) => i.id === item.id);
        updatedItems[index] = { ...updatedExistingItem };
      } else {
        updatedItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }
    } else {
      if (existingItem.quantity === 1) {
        updatedItems = cartData.items.filter((i) => i.id !== item.id);
      } else {
        const updatedExistingItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
          totalPrice: existingItem.totalPrice - existingItem.price,
        };
        const index = updatedItems.findIndex((i) => i.id === item.id);
        updatedItems[index] = { ...updatedExistingItem };
      }
    }

    const updateCartItems = async () => {
      const response = await fetch(
        'https://react-demo-5f248-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(updatedItems),
        }
      );

      if (!response.ok) {
        throw new Error('Updating cart data failed!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const responseData = await updateCartItems();
      dispatch(cartActions.setCartItems(responseData));
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Updated cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Updating cart data failed!',
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchCartItems = async () => {
      const response = await fetch(
        'https://react-demo-5f248-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Fetching cart data failed!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const responseData = await fetchCartItems();
      dispatch(cartActions.setCartItems(responseData ?? []));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};
