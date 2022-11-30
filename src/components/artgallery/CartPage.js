import { prettyDOM } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react";
import { Cart } from "./context/Context";
import SingleProduct from "./SingleProduct";
const CartPage = () => {
  const { cart } = useContext(Cart);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((curr, acc) => acc + Number(curr.price)));
  }, [cart]);

  return (
    <div>
      {cart.map((prod) => (
        <SingleProduct prod={prod} key={prod.key} />
      ))}
    </div>
  );
};

export default CartPage;
