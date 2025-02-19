import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { updateCartData } from '../../store/cart-actions';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => dispatch(updateCartData(props.item, cart, 'REMOVE'))}
          >
            -
          </button>
          <button
            onClick={() => dispatch(updateCartData(props.item, cart, 'ADD'))}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
