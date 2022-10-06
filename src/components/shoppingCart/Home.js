import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./Styles.css";

faker.seed(100);
const Home = () => {
  // const [cart, setCart] = useState([]);

  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    //image: faker.random.image.fashion(),
    image: faker.image.image(),
  }));
  const [products] = useState(productArray);
  console.log(productArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};
export default Home;
