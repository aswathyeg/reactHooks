import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./Styles.css";
import SingleProduct from "./SingleProduct";
faker.seed(100);
const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    //image: faker.random.image.fashion(),
    image: faker.image.image(),
  }));
  const [products] = useState(productsArray);
  console.log(productsArray);
  return (
    <div>
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Home;
