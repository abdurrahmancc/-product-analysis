import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import ProductsReview from "../ProductsReview/ProductsReview";

import "./Home.css";

const Home = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  //   useEffect(() => {
  //     fetch("products.json")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data.slice(0, 6)));
  //   }, []);
  console.log(products.slice(0, 3));
  return (
    <div className="container ">
      <div className="mb-5">
        <div className="row ">
          <div className="col-md-6 ">
            <h1 className="text-start fw-bold margin">Best product </h1>
            <h1 className="text-start fw-bolder titel-color">Top Cheap price T-shirt </h1>
            <p className="text-start mt-5 fs-5">
              A quality t-shirt must be aesthetically pleasing as well as practical. This mostly
              depends on the type of fabric used. Cotton is considered one of the best fabrics for
              T-shirt manufacturing since it is soft and breathable
            </p>
            <div className="d-flex">
              <button className=" bg-opacity-25 bg-primary titel-color border-0 py-2 px-3 fw-bolder rounded">
                Live Demo
              </button>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              // width="300px"
              className="img-fluid mt-5 text-center"
              src="https://www.ooshirts.com/products/5/catalog.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" row g-5">
        <h1 className="margin titel-color fw-bold">Customer Reviews</h1>
        {products.slice(0, 3).map((product) => (
          <ProductsReview key={product.id} product={product}></ProductsReview>
        ))}
      </div>
      <div>
        <button
          onClick={() => navigate("/reviews")}
          className="border-0 py-2 px-4 btn-color text-white rounded my-5"
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
