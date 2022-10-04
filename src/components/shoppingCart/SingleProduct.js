import React from "react";
import "./Styles.css";
const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="prodDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      <button className="add">Add to cart</button>
    </div>
  );
};
export default SingleProduct;
