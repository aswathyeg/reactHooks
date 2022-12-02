import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import CartPage from "./components/shoppingCart/CartPage";
//import Cart from "./components/shoppingCart/CartPage";

import Header from "./components/shopping-context-reducer/Header";
import Home from "./components/shopping-context-reducer/Home";
import Cart from "./components/shopping-context-reducer/Cart";

// import Header from "./components/artgallery/Header";
// import Home from "./components/artgallery/Home";
// import CartPage from "./components/artgallery/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
