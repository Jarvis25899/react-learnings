import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../formatting";

export default function MealItem({ meal }) {
  const { addItemToCart } = useContext(CartContext);

  const formattedPrice = currencyFormatter.format(meal.price);

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <div>
          <span className="meal-item-price">{formattedPrice}</span>
        </div>
        <p className="meal-item-description">{meal.description}</p>
        <div className="meal-item-actions">
          <button className="button" onClick={() => addItemToCart(meal)}>
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}
