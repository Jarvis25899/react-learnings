import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Cart() {
  const { items, updateItemQty } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="cart">
      {(!items || items.length === 0) && <p>No items in cart!</p>}
      {items?.length > 0 && (
        <ul>
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id} className="cart-item">
                <p>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </p>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQty(item.id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateItemQty(item.id, 1)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="cart-total">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </div>
    </div>
  );
}
