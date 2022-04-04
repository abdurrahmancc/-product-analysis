import React from "react";
import useProducts from "../../useProducts/useProducts";

const Review = () => {
  const [products, setProducts] = useProducts();

  return (
    <div>
      <h1>this is our review section{products.length}</h1>
    </div>
  );
};

export default Review;
