import { createContext, useState } from "react";
export const Cart = createContext();
const Context = ({ childrern }) => {
  const [cart, setCart] = useState([]);
  return <Cart.Provider value={{ cart, setCart }}>{childrern}</Cart.Provider>;
};
export default Context;
