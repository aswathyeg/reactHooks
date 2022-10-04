import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
const Header = () => {
  return (
    <div>
      <span className="header">context API</span>
      <ul className="nav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
