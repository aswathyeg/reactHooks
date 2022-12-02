import React from "react";
import "./Styles.css";

import { CartState } from "./context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="productContainer">
      <Filters />
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Home;
