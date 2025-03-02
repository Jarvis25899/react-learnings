import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>The home page !!</h1>
      <p>
        Go to <Link to="/products">the list of products.</Link>
      </p>
      <p>
        <button onClick={onNavigate}>Products</button>
      </p>
    </>
  );
}
