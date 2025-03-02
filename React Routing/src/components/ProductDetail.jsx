import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product details</h1>
      <p>{params.id}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
