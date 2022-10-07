import React, { createContext, useState } from "react";
export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  // below code will make these 'value' available to all required components
  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
};
export default Context;
