import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart';
import { updateCartData } from '../../store/cart-actions';

const ProductItem = (props) => {
  const { title, price, description } = props.item;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCart = (item) => {
    dispatch(updateCartData(item, cart, 'ADD'));
    // dispatch(cartActions.addItem(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCart(props.item)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
