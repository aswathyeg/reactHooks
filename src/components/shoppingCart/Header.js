import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Context";
import "./Styles.css";
const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      {/* <span className="header">context API</span> */}
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
