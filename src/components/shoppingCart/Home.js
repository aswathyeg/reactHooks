import React, { useState } from "react";
import { faker } from "@faker-js/faker";
const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  const [products] = useState(productArray);
  console.log(productArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <span>{prod.name}</span>
      ))}
    </div>
  );
};
export default Home;
