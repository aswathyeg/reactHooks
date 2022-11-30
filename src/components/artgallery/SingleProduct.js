import React, { useContext } from "react";
import { Cart } from "./context/Context";
import "./Styles.css";
const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div>
      <img src={prod.image} alt={prod.name} />
    </div>
  );
};

export default SingleProduct;
