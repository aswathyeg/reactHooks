import React from "react";
import { faker } from "@faker-js/faker";
import "./Styles.css";
faker.seed(100);
const Home = () => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    //image: faker.random.image.fashion(),
    image: faker.image.image(),
  }));
  return <div>Home</div>;
};

export default Home;
