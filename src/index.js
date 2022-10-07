import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import AuthContextProvider from "./context/auth-context";
import Context from "./components/shoppingCart/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <App />
  </Context>
);
