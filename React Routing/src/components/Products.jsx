import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "product-1",
    label: "Product 1",
  },
  {
    id: "product-2",
    label: "Product 2",
  },
  {
    id: "product-3",
    label: "Product 3",
  },
];

export default function Products() {
  return (
    <>
      <h1>The product page !!</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
