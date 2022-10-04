import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  const [products] = useState(productArray);
  console.log(productArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} />
      ))}
    </div>
  );
};
export default Home;
