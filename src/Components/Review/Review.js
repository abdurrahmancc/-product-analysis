import React from "react";
import useProducts from "../../Hooks/useProducts";
import AllReviews from "../AllReviews/AllReviews";

const Review = () => {
  const [products, setProducts] = useProducts();

  return (
    <div className="container my-5">
      <h1 className="titel-color fw-bold margin-bottom">All Reviews</h1>
      <div className="row g-5">
        {products.map((product) => (
          <AllReviews key={product.id} product={product}></AllReviews>
        ))}
      </div>
    </div>
  );
};

export default Review;
