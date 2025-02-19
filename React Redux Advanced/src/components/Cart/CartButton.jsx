import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems?.length ?? 0}</span>
    </button>
  );
};

export default CartButton;
