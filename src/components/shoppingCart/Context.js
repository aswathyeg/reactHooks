import React, { createContext, useState } from "react";
const Cart = createContext();
const [cart, setCart] = useState([]);
const Context = ({ children }) => {
  // below code will make these value available to all required components
  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
};
export default Context;
