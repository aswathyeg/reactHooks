import { createContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";
export const Cart = createContext();
const Context = ({ childrern }) => {
  //children will come from index.js

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ cart, setCart }}>{childrern}</Cart.Provider>;
};
export default Context;
