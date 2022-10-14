import { CartState } from "./context/Context";
import "./Styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => (
          <span>{prod.name}</span>
        ))}
      </div>
      <p>Home</p>
    </div>
  );
};
export default Home;
