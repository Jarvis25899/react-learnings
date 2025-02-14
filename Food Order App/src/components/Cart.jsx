import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Cart({ actions, totalPrice }) {
  const { items, updateItemQty } = useContext(CartContext);

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
                  <span>{` - ${item.qty} x ${formattedPrice}`}</span>
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
        <strong> {totalPrice}</strong>
      </div>
      <form method="dialog" className="modal-actions">
        {actions}
      </form>
    </div>
  );
}
